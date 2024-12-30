class StringCalculator  {

    add(numbers: string) {
        if (!numbers) {
            return 0;
        }
        const numbersArr = numbers.split(',').map(n => Number(n));
        let sum = numbersArr[0];
        if (numbersArr.length === 2) {
            sum += numbersArr[1];
        }
        return sum;
    }
    
}

export { StringCalculator }