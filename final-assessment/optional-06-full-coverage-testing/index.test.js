import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Pengujian skenario menyeluruh
test('sum - kedua argumen adalah bilangan positif', () => {
  assert.strictEqual(sum(5, 3), 8, '5 + 3 harus menghasilkan 8');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 harus menghasilkan 0');
  assert.strictEqual(sum(10, 20), 30, '10 + 20 harus menghasilkan 30');
});

test('sum - salah satu atau kedua argumen bukan bilangan', () => {
  assert.strictEqual(sum('5', 3), 0, '"5" + 3 harus menghasilkan 0 karena argumen pertama bukan angka');
  assert.strictEqual(sum(5, '3'), 0, '5 + "3" harus menghasilkan 0 karena argumen kedua bukan angka');
  assert.strictEqual(sum('5', '3'), 0, '"5" + "3" harus menghasilkan 0 karena kedua argumen bukan angka');
  assert.strictEqual(sum(null, undefined), 0, 'null + undefined harus menghasilkan 0');
});

test('sum - salah satu atau kedua argumen adalah bilangan negatif', () => {
  assert.strictEqual(sum(-5, 3), 0, '-5 + 3 harus menghasilkan 0 karena argumen pertama negatif');
  assert.strictEqual(sum(5, -3), 0, '5 + -3 harus menghasilkan 0 karena argumen kedua negatif');
  assert.strictEqual(sum(-5, -3), 0, '-5 + -3 harus menghasilkan 0 karena kedua argumen negatif');
});

test('sum - argumen bukan tipe angka (ekstrem)', () => {
    assert.strictEqual(sum({}, []), 0, '{} + [] harus menghasilkan 0 karena kedua argumen bukan angka');
    assert.strictEqual(sum(true, false), 0, 'true + false harus menghasilkan 0 karena kedua argumen bukan angka');
    assert.ok(Number.isNaN(sum(NaN, NaN)), 'NaN + NaN harus menghasilkan NaN');
});
  
