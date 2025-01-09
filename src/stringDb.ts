class StringDb  {
    private LAST_ROW_ID = 1;

    save(numbers: string, result: number): number {
        // Save result and return row id
        console.log('numbers', numbers);
        console.log('result', result);
        const tempId = this.LAST_ROW_ID;
        this.LAST_ROW_ID += 1;
        return tempId;
    }
}

export { StringDb }