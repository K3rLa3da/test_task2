// @flow
import * as React from 'react';

import styles from '../../../assets/styles/containers/form_field.module.scss';

type Props = {
    className?: string,
    children: React.Node
}


const DefaultFieldContainer = (props: Props) => {
    const {children, className} = props;

    return (
        <div className={`${styles.container} ${className ? styles[className] : ''}`}>
            {children}
        </div>
    );
};

export default DefaultFieldContainer;