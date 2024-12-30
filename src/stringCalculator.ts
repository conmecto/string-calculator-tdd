class StringCalculator  {
    private static readonly ALLOWED_DELIMITERS = [',', '\n'];

    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }
        const commaSplittedNumbers = this.splitNumbers(numbers, ',');
        let sum = 0;
        for(const partialString of commaSplittedNumbers) {
            const newLineSplittedNumbers = this.splitNumbers(partialString, '\n');
            sum += newLineSplittedNumbers.reduce((tempSum: number, n: string) => tempSum + Number(n), 0);
        }
        return sum;
    }

    private splitNumbers(numbers: string, delimiter: string): string[] {
        if (!StringCalculator.ALLOWED_DELIMITERS.includes(delimiter)) {
            throw new Error('Delimiter not allowed');
        }
        return numbers.split(delimiter);
    }
    
}

export { StringCalculator }