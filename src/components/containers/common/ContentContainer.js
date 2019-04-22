// @flow
import * as React from 'react';

import styles from '../../../assets/styles/containers/content.module.scss';

type Props = {
    children: React.Node;
    className?: string;
}

const ContentContainer = (props: Props) => {
    const {children, className} = props;
    return (
        <div className={`${styles.container} ${className || ''}`}>
            {children}
        </div>
    );
};


export default ContentContainer;
