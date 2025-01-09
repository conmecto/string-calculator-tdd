import { StringDb } from './stringDb';

describe('StringDb', () => {
    let stringDb: StringDb;

    beforeEach(() => {
        stringDb = new StringDb();
    });

    test('should save and successfully return id', () => {
        expect(stringDb.save('1', 1)).toBe(1);
    });
});