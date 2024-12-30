import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add('')).toBe(0);
    });
});