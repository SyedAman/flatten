const assert = require('assert');

const flatten = require('../index');

let nestedArray, expectedFlatArray;

nestedArray = [1, [2, 3, [4, 5, [6, 7]]]];
expectedFlatArray = [1, 2, 3, 4, 5, 6, 7];
assert.deepEqual(flatten(nestedArray), expectedFlatArray, "Expect flatten to flatten a nested array of numbers");

nestedArray = ['a', ['b', 'c', ['d', 'e', ['f', 'g']]]];
expectedFlatArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
assert.deepEqual(flatten(nestedArray), expectedFlatArray, "Expect flatten to flatten a nested array of mixed strings");

nestedArray = [1, ['a', 2, [3, 'c', ['d', 'e']]]];
expectedFlatArray = [1, 'a', 2, 3, 'c', 'd', 'e'];
assert.deepEqual(flatten(nestedArray), expectedFlatArray, "Expect flatten to flatten a nested array of mixed types");
