// @flow
import React from 'react';

import CommonInputWrapper from '../containers/eventForm/CommonInputWrapper';

import styles from '../../assets/styles/elements/textarea.module.scss';

type Props = {
    maxLength: number,
    name: string,
    value: ?string,
    placeholder?: string,
    hasError: boolean,
    className?: string,
    onChange: Function,

}


const TextArea = (props: Props) => {
    const {maxLength, value, onChange, hasError, className, ...restProps} = props;

    const onInputChange = e => {
        const {value} = e.target;
        onChange(value);
    };

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <textarea {...restProps}
                      className={`${hasError ? styles.error : styles.valid} ${className || ''}`}
                      rows={5}
                      value={value || ''}
                      onChange={onInputChange}
            />
            <div className={styles.field_message}>
                <span>{`Max length ${maxLength} characters`}</span>
                <span>{`${value ? value.length : 0}/${maxLength}`}</span>
            </div>
        </div>
    );
};

export default CommonInputWrapper(TextArea);