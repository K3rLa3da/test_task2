// @flow

export const validateRequired = (value: ?string) => (value ? undefined : 'Can not be empty');

// eslint-disable-next-line
export const validateNumber = (value: ?string) => (value && isNaN(Number(value.replace(',', '.'))) ? 'Must be a number' : undefined);

export const validateMaxLength = (maxLength: number) => (value: ?string) => (
    value && value.length > maxLength ? `Max ${maxLength} characters` : undefined
);

export const validateEmail = (value: ?string) => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email format'
        : undefined
);