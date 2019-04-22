// @flow
import React from 'react';

import CommonInputWrapper from '../containers/eventForm/CommonInputWrapper';

import styles from '../../assets/styles/elements/input.module.scss';

type Props = {
    className?: string,
    name: string,
    placeholder?: string,
    value: ?string,
    hasError: boolean,
    onChange: Function,
    onBlur: Function,
    onFocus: Function,
}

const SimpleInput = (props: Props) => {
    const {hasError, value, onChange, className, ...restProps} = props;

    const onInputChange = e => {
        const {value} = e.target;
        onChange(value);
    };

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <input {...restProps}
                   className={`${hasError ? styles.error : styles.valid}`}
                   value={value}
                   onChange={onInputChange}
            />
        </div>
    );
};

export default CommonInputWrapper(SimpleInput);