const { test, describe } = require('@jest/globals');
const { returnTwo, greeting, add } = require('./functions');

test('returnTwo should return the integer 2', function() {
    expect(returnTwo()).toBe(2);
});

describe('Greeting tests', function() {
    test('Greeting 1', function() {
        expect(greeting('James')).toBe('Hello, James.')
    });
    test('Greeting 2', function() {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    });
});


test('add test', function() {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toBe(14);
});

