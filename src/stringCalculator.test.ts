import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('single number returns the value', () => {
        expect(calculator.add('1')).toBe(1);
    });

    test('add two comma separated numbers', () => {
        expect(calculator.add('9,10')).toBe(19);
    });

    test('should return sum of multiple numbers', () => {
        expect(calculator.add('1,2,3,4,5')).toBe(15);
    });

    test('should handle newline as delimiter', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
    });
});