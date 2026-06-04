#!/usr/bin/env node

const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error('Usage: node scripts/validate-analytics-spec.js path/to/spec.json');
  process.exit(2);
}

let spec;
try {
  spec = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch (err) {
  console.error(`Invalid JSON: ${err.message}`);
  process.exit(2);
}

const errors = [];
const warnings = [];
const snakeCase = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;
const allowedTypes = new Set(['string', 'number', 'boolean', 'array', 'object', 'integer', 'datetime']);

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function addMissing(path, field) {
  errors.push(`${path} is missing ${field}`);
}

if (!isObject(spec)) {
  errors.push('Spec root must be a JSON object');
} else {
  if (!nonEmptyString(spec.feature)) addMissing('root', 'feature');
  if (!Array.isArray(spec.analytics_goals) || spec.analytics_goals.length === 0) {
    addMissing('root', 'analytics_goals[]');
  }
  if (!Array.isArray(spec.events) || spec.events.length === 0) {
    addMissing('root', 'events[]');
  }

  const seenEvents = new Set();
  for (const [eventIndex, event] of (spec.events || []).entries()) {
    const path = `events[${eventIndex}]`;
    if (!isObject(event)) {
      errors.push(`${path} must be an object`);
      continue;
    }
    if (!nonEmptyString(event.name)) {
      addMissing(path, 'name');
    } else {
      if (!snakeCase.test(event.name)) warnings.push(`${path}.name should be snake_case: ${event.name}`);
      if (seenEvents.has(event.name)) errors.push(`duplicate event name: ${event.name}`);
      seenEvents.add(event.name);
    }
    if (!nonEmptyString(event.trigger)) addMissing(path, 'trigger');
    if (!nonEmptyString(event.description)) addMissing(path, 'description');
    if (!Array.isArray(event.properties)) {
      addMissing(path, 'properties[]');
      continue;
    }

    const seenProps = new Set();
    for (const [propIndex, prop] of event.properties.entries()) {
      const propPath = `${path}.properties[${propIndex}]`;
      if (!isObject(prop)) {
        errors.push(`${propPath} must be an object`);
        continue;
      }
      if (!nonEmptyString(prop.name)) {
        addMissing(propPath, 'name');
      } else {
        if (!snakeCase.test(prop.name)) warnings.push(`${propPath}.name should be snake_case: ${prop.name}`);
        if (seenProps.has(prop.name)) errors.push(`${path} has duplicate property: ${prop.name}`);
        seenProps.add(prop.name);
      }
      if (!nonEmptyString(prop.type)) {
        addMissing(propPath, 'type');
      } else if (!allowedTypes.has(prop.type)) {
        warnings.push(`${propPath}.type is uncommon: ${prop.type}`);
      }
      if (typeof prop.required !== 'boolean') errors.push(`${propPath}.required must be boolean`);
      if (!nonEmptyString(prop.description)) addMissing(propPath, 'description');
    }
  }

  const piiProps = [];
  for (const event of (spec.events || [])) {
    for (const prop of (event && event.properties) || []) {
      if (prop && prop.pii === true) piiProps.push(`${event.name || 'unknown_event'}.${prop.name || 'unknown_property'}`);
    }
  }
  for (const prop of spec.user_properties || []) {
    if (prop && prop.pii === true) piiProps.push(`user_properties.${prop.name || 'unknown_property'}`);
  }
  const handling = spec.privacy && Array.isArray(spec.privacy.pii_handling) ? spec.privacy.pii_handling : [];
  if (piiProps.length && handling.length === 0) {
    errors.push(`PII properties require privacy.pii_handling: ${piiProps.join(', ')}`);
  }
  if (!Array.isArray(spec.qa) || spec.qa.length === 0) {
    warnings.push('Add qa[] checks so implementation can be verified before launch');
  }
}

if (errors.length || warnings.length) {
  if (errors.length) {
    console.error('Errors:');
    for (const err of errors) console.error(`- ${err}`);
  }
  if (warnings.length) {
    console.error('Warnings:');
    for (const warn of warnings) console.error(`- ${warn}`);
  }
  process.exit(errors.length ? 1 : 0);
}

console.log('Analytics spec looks structurally valid.');
