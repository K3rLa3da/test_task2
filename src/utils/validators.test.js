import {
    validateRequired,
    validateNumber,
    validateMaxLength,
    validateEmail,
} from './validators';

describe('validateRequired tests', () => {
    test('Test validateRequired pass', () => {
        expect(validateRequired('test')).toBeUndefined();
    });
    const errMessage = 'Can not be empty';
    const incomeData = [
        [undefined, errMessage],
        ['', errMessage],
        [null, errMessage],
    ];
    test.each(incomeData)(
        'call validateRequired() with param %p - wait result %p',
        (value, expected) => {
            expect(validateRequired(value)).toBe(expected);
        },
    );
});

describe('validateNumber tests', () => {
    const errMessage = 'Must be a number';
    const incomeData = [
        ['0', undefined],
        ['45', undefined],
        ['45.56', undefined],
        ['45,56', undefined],
        [undefined, undefined],
        ['', undefined],
        [null, undefined],
        ['safdafsa', errMessage],
        ['45t', errMessage]
    ];
    test.each(incomeData)(
        'call validateNumber() with param %p - wait result %p',
        (value, expected) => {
            expect(validateNumber(value)).toBe(expected);
        },
    );
});

describe('validateMaxLength tests', () => {
    const incomeData = [
        [4, 'tests', 'Max 4 characters'],
        [4, 'test', undefined],
        [5, 'test', undefined],
        [5, undefined, undefined],
        [5, null, undefined],
    ];
    test.each(incomeData)(
        'call validateMaxLength with max %i, value %p - wait result %p',
        (maxLength, value, expected) => {
            expect(validateMaxLength(maxLength)(value)).toBe(expected);
        }
    );
});

describe('validateEmail tests', () => {
    const incomeData = [
        ['dafasf', 'Invalid email format'],
        ['1111111', 'Invalid email format'],
        ['validEmail@mail.com', undefined],
        [null, undefined],
        [undefined, undefined]
    ];
    test.each(incomeData)(
        'test validateEmail with email %p - wait result %p',
        (email, expected) => {
            expect(validateEmail(email)).toBe(expected);
        }
    );
});

