import test from 'node:test';
import assert from 'node:assert/strict';
import { getTicketPrice, formatPrice, calculatePairSavings, TICKET_PACKAGES } from './pricing.ts';

test('pricing returns correct early bird and standard prices for single participant', () => {
  assert.equal(getTicketPrice('participant_single', true), 85);
  assert.equal(getTicketPrice('participant_single', false), 110);
});

test('pricing returns correct breakdown ticket prices', () => {
  assert.equal(getTicketPrice('breakdown_single', true), 150);
  assert.equal(getTicketPrice('breakdown_single', false), 180);
});

test('pair discounts match 20% advertised rates', () => {
  // Two regular: 85 * 2 = 170. Discounted to 136. (Savings: 34)
  assert.equal(TICKET_PACKAGES['pair_both_regular'].earlyPrice, 136);
  assert.equal(calculatePairSavings(170, 136), 34);

  // One breakdown + one regular: 150 + 85 = 235. Discounted to 188. (Savings: 47)
  assert.equal(TICKET_PACKAGES['pair_one_breakdown'].earlyPrice, 188);
  assert.equal(calculatePairSavings(235, 188), 47);

  // Two breakdowns: 150 * 2 = 300. Discounted to 240. (Savings: 60)
  assert.equal(TICKET_PACKAGES['pair_two_breakdowns'].earlyPrice, 240);
  assert.equal(calculatePairSavings(300, 240), 60);
});

test('formatPrice formats amounts with Euro symbol', () => {
  assert.equal(formatPrice(85), '€85');
  assert.equal(formatPrice(150), '€150');
});
