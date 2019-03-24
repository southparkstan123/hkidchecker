import * as _ from 'lodash';

export class HKID {

    characters: string

    constructor(characters: string){
        this.characters = characters;
    }

    checkDigit(): number{
        const lastDigit: string = _.chain(this.characters).split('').last().value()
        return (lastDigit === "A") ? 10 : _.parseInt(lastDigit);
    }

    isValidFormat(): boolean{
        return /^([A-Z]{0,1})([A-Z]{1})([0-9]{6})([0-9A]{1})$/.test(this.characters);
    }

    output(): string {
        return this.isValidHKID() ? `${this.characters} is valid!`: `Invalid HKID!`;
    }

    isValidHKID(): boolean{
        if(this.isValidFormat()){
            let weight: number = 10;
            const result: number = _.chain(this.characters)
                .padStart(9)
                .split('')
                .map((digit: string, index: number) => (index === 0 || index === 1) ? ((/^([\s]{1})$/).test(digit) ? 36 : digit.charCodeAt(0) - 55) : _.parseInt(digit))
                .dropRight()
                .reduce((sum: number, num: number) => {
                    weight--;
                    return sum + num * weight;
                }, 0)
                .value();
            const mod: number = 11 - result % 11;
            return mod === this.checkDigit();
        } else {
            return false;
        }
    }
}