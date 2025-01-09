import { StringCalculator } from './stringCalculator';
import { StringDb } from './stringDb';

describe('StringCalculator', () => {
    let calculator: StringCalculator;
    let stringDb: StringDb;

    beforeEach(() => {
        stringDb = new StringDb();
        calculator = new StringCalculator(stringDb);
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.solve('')).toBe(0);
    });

    test('single number returns the value', () => {
        expect(calculator.solve('1')).toBe(1);
    });

    test('solve two comma separated numbers', () => {
        expect(calculator.solve('9,10')).toBe(19);
    });

    test('should return sum of multiple numbers', () => {
        expect(calculator.solve('1,2,3,4,5')).toBe(15);
    });

    test('should handle newline as delimiter', () => {
        expect(calculator.solve('1\n2,3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(calculator.solve('//;\n1;2')).toBe(3);
    });

    test('should throw error for negative numbers', () => {
        expect(() => calculator.solve('1,-2,3,-4'))
            .toThrow('Negatives not allowed: -2, -4');
    });

    test('should ignore numbers greater than 1000', () => {
        expect(calculator.solve('1000,2,1001,3')).toBe(1005);
    });

    test('should return sum for custom delimiters longer than length 1', () => {
        expect(calculator.solve('//[***]\n1***2***3')).toBe(6);
    });

    test('should return sum for multiple custom delimiters', () => {
        expect(calculator.solve('//[*][%]\n1*2%3')).toBe(6);
    });

    test('should return sum for multiple custom delimiters longer than length 1', () => {
        expect(calculator.solve('//[***][%%]\n1***2%%3')).toBe(6);
    });

    test('should multiply numbers with * as custom delimiter', () => {
        expect(calculator.solve('//*\n2*3')).toBe(6);
    });
});