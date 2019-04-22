// @flow
import React from 'react';

import styles from '../../assets/styles/elements/button.module.scss';

type Props = {
    className?: string,
    content: string,
    type?: string,
    onClick?: Function
}

const Button = (props: Props) => {
    const {className, content, ...restProps} = props;
    return (
        <button {...restProps}
                className={`${styles.button} ${className || ''}`}
        >
            {content}
        </button>
    );
};


export default Button;
