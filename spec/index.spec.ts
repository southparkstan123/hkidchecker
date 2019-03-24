import { HKID } from '../src/index';

const validHKID: HKID = new HKID("G1655352");
const anotherValidHKID: HKID = new HKID("AB1655351");
const fakeHKID: HKID = new HKID("R0429343");
const anotherFakeHKID: HKID = new HKID("#$@F8WF#$2$#FF");
const emptyString: HKID = new HKID("");
const nullObj: HKID = new HKID(null);

describe('HKID', () => {
    describe('object', () => {
        it('should be constructed if the parameter is not null', () => {
            const hkid: HKID = new HKID("Y0428343");

            expect(hkid.characters).toBeDefined();
            expect(hkid.checkDigit).toBeDefined();
            expect(hkid.isValidFormat).toBeDefined();
            expect(hkid.isValidHKID).toBeDefined();
            expect(hkid.output).toBeDefined();

            expect(hkid.characters).toBe("Y0428343");
            expect(typeof hkid.checkDigit).toBe("function");
            expect(typeof hkid.isValidFormat).toBe("function");
            expect(typeof hkid.isValidHKID).toBe("function");
            expect(typeof hkid.output).toBe("function");
        });

        it('should be constructed if the parameter is empty', () => {
            const hkid: HKID = new HKID("");

            expect(hkid.characters).toBeDefined();
            expect(hkid.checkDigit).toBeDefined();
            expect(hkid.isValidFormat).toBeDefined();
            expect(hkid.isValidHKID).toBeDefined();
            expect(hkid.output).toBeDefined();

            expect(hkid.characters).toBe("");
            expect(typeof hkid.checkDigit).toBe("function");
            expect(typeof hkid.isValidFormat).toBe("function");
            expect(typeof hkid.isValidHKID).toBe("function");
            expect(typeof hkid.output).toBe("function");
        });

        it('should be constructed if the parameter is null', () => {
            const hkid: HKID = new HKID(null);

            expect(hkid.characters).toBeDefined();
            expect(hkid.checkDigit).toBeDefined();
            expect(hkid.isValidFormat).toBeDefined();
            expect(hkid.isValidHKID).toBeDefined();
            expect(hkid.output).toBeDefined();

            expect(hkid.characters).toBe(null);
            expect(typeof hkid.checkDigit).toBe("function");
            expect(typeof hkid.isValidFormat).toBe("function");
            expect(typeof hkid.isValidHKID).toBe("function");
            expect(typeof hkid.output).toBe("function");
        });

    });

    describe('checkDigit', () => {
        it('should return true for valid HKID', () => {
            const checkDigit: number = validHKID.checkDigit();
            expect(checkDigit).toBe(2);
        });

        it('should return true for another valid HKID', () => {
            const checkDigit: number = anotherValidHKID.checkDigit();
            expect(checkDigit).toBe(1);
        });

        it('should return false for fake HKID', () => {
            const checkDigit: number = fakeHKID.checkDigit();
            expect(checkDigit).toBe(3);
        });

        it('should return false for another fake HKID', () => {
            const checkDigit: number = anotherFakeHKID.checkDigit();
            expect(checkDigit).toBeNaN();
        });

        it('should return false for empty string', () => {
            const checkDigit: number = emptyString.checkDigit();
            expect(checkDigit).toBeNaN();
        });

        it('should return false for null object', () => {
            const checkDigit: number = nullObj.checkDigit();
            expect(checkDigit).toBeNaN();
        });
    });

    describe('isValidFormat', () => {
        it('should return true for valid HKID', () => {
            const isValidFormat: boolean = validHKID.isValidFormat();
            expect(isValidFormat).toBe(true);
        });

        it('should return true for another valid HKID', () => {
            const isValidFormat: boolean = anotherValidHKID.isValidFormat();
            expect(isValidFormat).toBe(true);
        });

        it('should return true for fake HKID but have valid format', () => {
            const isValidFormat: boolean = fakeHKID.isValidFormat();
            expect(isValidFormat).toBe(true);
        });

        it('should return false for another fake HKID', () => {
            const isValidFormat: boolean = anotherFakeHKID.isValidFormat();
            expect(isValidFormat).toBe(false);
        });

        it('should return false for empty string', () => {
            const isValidFormat: boolean = emptyString.isValidFormat();
            expect(isValidFormat).toBe(false);
        });

        it('should return false for null object', () => {
            const isValidFormat: boolean = nullObj.isValidFormat();
            expect(isValidFormat).toBe(false);
        });


    });

    describe('isValidHKID', () => {
        it('should return true for valid HKID', () => {
            const isValidFormat = spyOn(validHKID, 'isValidFormat').and.returnValue(true);

            const isValidHKID = validHKID.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(true);
        });

        it('should return true for another valid HKID', () => {
            const isValidFormat = spyOn(anotherValidHKID, 'isValidFormat').and.returnValue(true);
            const isValidHKID = anotherValidHKID.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(true);
        });

        it('should return false for fake HKID', () => {
            const isValidFormat = spyOn(fakeHKID, 'isValidFormat').and.returnValue(false);
            const isValidHKID = fakeHKID.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(false);
        });

        it('should return false for another fake HKID', () => {
            const isValidFormat = spyOn(anotherFakeHKID, 'isValidFormat').and.returnValue(false);

            const isValidHKID = anotherFakeHKID.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(false);
        });

        it('should return false for empty string', () => {
            const isValidFormat = spyOn(emptyString, 'isValidFormat').and.returnValue(false);
            const isValidHKID = emptyString.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(false);
        });

        it('should return false for null object', () => {
            const isValidFormat = spyOn(nullObj, 'isValidFormat').and.returnValue(false);
            const isValidHKID = nullObj.isValidHKID();

            expect(isValidFormat).toHaveBeenCalled();
            expect(isValidHKID).toBe(false);
        });
    });

    describe('output', () => {
        it('should return true for valid HKID', () => {
            const isValidHKID = spyOn(validHKID, 'isValidHKID').and.returnValue(true);

            const result = validHKID.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe(`${validHKID.characters} is valid!`);
        });

        it('should return true for another valid HKID', () => {
            const isValidHKID = spyOn(anotherValidHKID, 'isValidHKID').and.returnValue(true);

            const result = anotherValidHKID.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe(`${anotherValidHKID.characters} is valid!`);
        });

        it('should return false for fake HKID', () => {
            const isValidHKID = spyOn(fakeHKID, 'isValidHKID').and.returnValue(false);

            const result = fakeHKID.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe('Invalid HKID!');
        });

        it('should return false for another fake HKID', () => {
            const isValidHKID = spyOn(anotherFakeHKID, 'isValidHKID').and.returnValue(false);

            const result = anotherFakeHKID.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe('Invalid HKID!');
        });

        it('should return false for empty string', () => {
            const isValidHKID = spyOn(emptyString, 'isValidHKID').and.returnValue(false);

            const result = emptyString.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe('Invalid HKID!');
        });

        it('should return false for null object', () => {
            const isValidHKID = spyOn(nullObj, 'isValidHKID').and.returnValue(false);

            const result = nullObj.output();

            expect(isValidHKID).toHaveBeenCalled();
            expect(result).toBe('Invalid HKID!');
        });
    });
})