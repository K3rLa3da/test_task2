// @flow
import React from 'react';
import Select from 'react-select';

import CommonInputWrapper from '../containers/eventForm/CommonInputWrapper';

import styles from '../../assets/styles/elements/dropdown.module.scss';

type Props = {
    message?: string,
    options: Array<Object>,
    placeholder?: string,
    value: ?string,
    hasError: boolean,
    onChange: Function,
}

const DropdownInput = (props: Props) => {
    const {options, value, onChange, hasError, placeholder, message} = props;

    const onDropdownChange = (selected: Object) => {
        const {value} = selected;
        onChange(value);
    };

    const getDefaultValue = () => {
        const meOptions = options.find(option => option.label === 'Me');
        if (meOptions) {
            return meOptions.options.find(option => option.value === value);
        }
    };

    const selectStyles = () => ({
        singleValue: style => ({ ...style, ...{color: '#555555'}}),
        placeholder: style => ({ ...style, ...{color: '#9e9e9e'}}),
    })

    return (
        <div className={styles.container}>
            <Select value={getDefaultValue()}
                    onChange={onDropdownChange}
                    options={options}
                    placeholder={placeholder}
                    className={`${styles.container} ${hasError ? styles.error : styles.valid}`}
                    styles={selectStyles()}

            />
            {message && <div className={styles.field_message}>{message}</div>}
        </div>
    );
};

export default CommonInputWrapper(DropdownInput);