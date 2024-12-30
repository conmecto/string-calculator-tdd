class StringCalculator  {

    add(numbers: string) {
        if (!numbers) {
            return 0;
        }
        const sum = numbers.split(',').reduce((sum: number, n: string) => sum + Number(n), 0);
        return sum;
    }
    
}

export { StringCalculator }