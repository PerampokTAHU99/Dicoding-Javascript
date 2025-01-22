import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Testing sum function', (t) => {
  assert.strictEqual(sum(1, 2), 3, 'sum(1, 2) harus menghasilkan 3');
  assert.strictEqual(sum(-1, -2), -3, 'sum(-1, -2) harus menghasilkan -3');
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) harus menghasilkan 0');
  assert.strictEqual(sum(-1, 1), 0, 'sum(-1, 1) harus menghasilkan 0');
});
