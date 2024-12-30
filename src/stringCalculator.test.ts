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
});