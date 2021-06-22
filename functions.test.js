const { test, describe } = require('@jest/globals');
const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

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




describe('Math functions', function() {
    test('Add test', function() {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toBe(14);
    });
    test('Multiply test', function() {
        expect(multiply(6, 6)).toEqual(36);
    });
    test('Divide test', function() {
        expect(divide(20, 2)).toEqual(10);
    });
    test('Subtract test', function() {
        expect(subtract(40, 25)).toEqual(15);
    });
});