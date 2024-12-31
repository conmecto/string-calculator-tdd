class StringCalculator  {
    private static readonly CUSTOM_DELIMITER_START = '//';
    private static readonly DEFAULT_DELIMITER = ',';
    private static readonly NEW_LINE = '\n'; 

    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }
        let delimiters = [];
        let checkSingleStarPattern = false;
        const parsedNumbersResponse = this.parseNumbers(numbers);
        if (parsedNumbersResponse?.customDelimiters) {
            delimiters = parsedNumbersResponse.customDelimiters;
            numbers = parsedNumbersResponse.parsedNumbers;
            checkSingleStarPattern = this.checkSingleStarPattern(delimiters);
        } else {
            delimiters = [StringCalculator.DEFAULT_DELIMITER, StringCalculator.NEW_LINE];
        }
        const splittedNumbers = this.splitNumbers(numbers, delimiters);
        const intParsedNumbers = splittedNumbers.map(num => parseInt(num));
        this.checkNegatives(intParsedNumbers);
        if (checkSingleStarPattern) {
            return this.multiply(intParsedNumbers);
        }
        const sum = intParsedNumbers
            .filter(num => num <= 1000)
            .reduce((tempSum: number, n: number) => tempSum + n, 0);
        return sum;
    }

    private multiply(numbers: number[]) {
        const product = numbers
            .reduce((product: number, n: number) => product * n, 1);
        return product;
    }

    private checkSingleStarPattern(delimiters: string[]) {
        if (delimiters[0] === '*' && delimiters.length === 1) {
            return true;
        }
        return false;
    }

    private parseNumbers(numbers: string): { customDelimiters: string[], parsedNumbers: string } | undefined {
        if (!numbers.startsWith(StringCalculator.CUSTOM_DELIMITER_START)) {
            return undefined;
        }
        const newLineStart = numbers.indexOf('\n');
        const customDelimiterSubstring = numbers.substring(2, newLineStart);
        const customDelimiters = customDelimiterSubstring
            .replaceAll(']', ' ')
            .replaceAll('[', ' ')
            .split(' ')
            .filter(c => c != '');
        const parsedNumbers = numbers.substring(newLineStart + 1);
        return {
            customDelimiters,
            parsedNumbers
        }
    }

    private splitNumbers(numbers: string, delimiters: string[]): string[] {
        const regexString = delimiters.map(d => `$${d}`).join('')
        const delimiterRegex = new RegExp(`[${regexString}]`);
        return numbers.split(delimiterRegex);
    }

    private checkNegatives(numbers: number[]): void {
        const negatives = numbers
            .filter(num => num < 0);

        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
    }
}

export { StringCalculator }