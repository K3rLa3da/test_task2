// @flow
import React from 'react';

import styles from '../../assets/styles/containers/content.module.scss';

type Props = {
    className?: string;
    content: string;
}

const ContentHeader = (props: Props) => {
    const {className, content} = props;
    return (
        <div className={`${styles.header} ${className || ''}`}>
            {content}
        </div>
    );
};


export default ContentHeader;
