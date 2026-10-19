import test from 'node:test';
import assert from 'node:assert/strict';
import { validateApplicationForm } from './validation.ts';
import type { ApplicationFormData } from './validation.ts';

test('validates fully filled application form correctly', () => {
  const validData: ApplicationFormData = {
    fullName: 'Александр Смирнов',
    website: 'https://apex-dubai.ae',
    role: 'Основатель компании',
    averageCheck: '$45,000',
    mainChallenge: 'Привлечение квалифицированных инвесторов в жилые проекты Дубая',
    packageId: 'breakdown_single',
    whatsapp: '+971501234567',
    email: 'alex@apex-dubai.ae',
  };

  const result = validateApplicationForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing or short fields', () => {
  const invalidData: ApplicationFormData = {
    fullName: '',
    website: '',
    role: '',
    averageCheck: '',
    mainChallenge: 'коротко',
    packageId: 'participant_single',
    whatsapp: '123',
    email: 'notanemail',
  };

  const result = validateApplicationForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.website);
  assert.ok(result.errors.role);
  assert.ok(result.errors.averageCheck);
  assert.ok(result.errors.mainChallenge);
  assert.ok(result.errors.whatsapp);
  assert.ok(result.errors.email);
});
