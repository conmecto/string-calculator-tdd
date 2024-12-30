class StringCalculator  {

    add(numbers: string) {
        if (!numbers) {
            return 0;
        }
        return Number(numbers);
    }
    
}

export { StringCalculator }