// @flow
import * as React from 'react';

import styles from '../../../assets/styles/containers/button.module.scss';

type Props = {
    children: React.Node
}


const ButtonContainer = (props: Props) => {
    const {children} = props;

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ButtonContainer;