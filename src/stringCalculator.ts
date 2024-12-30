class StringCalculator  {
    private static readonly CUSTOM_DELIMITER_START = '//'; 

    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }
        const delimiters = [',', '\n'];
        const parsedNumbersResponse = this.parseNumbers(numbers);
        if (parsedNumbersResponse?.customDelimiter) {
            delimiters.push(parsedNumbersResponse.customDelimiter);
            numbers = parsedNumbersResponse.parsedNumbers;
        }
        const splittedNumbers = this.splitNumbers(numbers, delimiters);
        this.checkNegatives(splittedNumbers);
        const sum = splittedNumbers.reduce((tempSum: number, n: string) => tempSum + Number(n), 0);
        return sum;
    }

    private parseNumbers(numbers: string): { customDelimiter: string, parsedNumbers: string } | undefined {
        if (!numbers.startsWith(StringCalculator.CUSTOM_DELIMITER_START)) {
            return undefined;
        }
        const newLineStart = numbers.indexOf('\n');
        const customDelimiter = numbers.substring(2, newLineStart);
        const parsedNumbers = numbers.substring(newLineStart + 1);
        return {
            customDelimiter,
            parsedNumbers
        }
    }

    private splitNumbers(numbers: string, delimiters: string[]): string[] {
        const regexString = delimiters.map(d => `$${d}`).join('')
        const delimiterRegex = new RegExp(`[${regexString}]`);
        return numbers.split(delimiterRegex);
    }

    private checkNegatives(numbers: string[]): void {
        const negatives = numbers
            .map(num => parseInt(num))
            .filter(num => num < 0);

        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
    }
}

export { StringCalculator }