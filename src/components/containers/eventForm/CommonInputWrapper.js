// @flow
import React, {Fragment} from 'react';

import FieldLabel from '../../elements/FieldLabel';

import {FIELDS_LABELS} from '../../../constants/common';

import styles from '../../../assets/styles/containers/form_field.module.scss';

type Props = {
    input: {
        name: string,
        value: ?(string | number),
        onChange: Function,
        onFocus: Function,
        onBlur: Function,
    },
    meta: {
        touched: boolean,
        error: ?string
    }
}


const CommonInputWrapper = (WrappedComponent: Function) => (props: Props) => {
    const {input: {name, value, onChange, onFocus, onBlur}, meta: {error, touched}, ...restProps} = props;

    const onInputChange = value => {
        onChange(value);
    };

    const label = FIELDS_LABELS[name];

    return (
        <Fragment>
            {label &&
            <FieldLabel {...label}
                        hasError={touched && error}
            />}
            <WrappedComponent {...restProps}
                              name={name}
                              hasError={touched && error}
                              value={value}
                              onChange={onInputChange}
                              onFocus={onFocus}
                              onBlur={onBlur}
            />
            {touched && error &&
            <div className={styles.errorMessage}>
                {error}
            </div>}
        </Fragment>
    );
};

export default CommonInputWrapper;