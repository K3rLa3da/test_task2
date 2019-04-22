// @flow
import React from 'react';

import styles from '../../assets/styles/elements/field_label.module.scss';

type Props = {
    text: string,
    hasError: boolean,
    isRequired: boolean,
}

const FieldLabel = (props: Props) => {
    const {text, hasError, isRequired} = props;
    return (
        <div className={hasError ? styles.error : styles.valid}>
            {text}
            {isRequired && <span>*</span>}
        </div>
    );
};


export default FieldLabel;
