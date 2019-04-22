// @flow
import React, {Fragment} from 'react';

import styles from '../../assets/styles/elements/header.module.scss';

const Header = () => (
    <Fragment>
        <div className={styles.offset}/>
        <div className={styles.content}>
            <div className={styles.text}><span>New Event</span></div>
        </div>
    </Fragment>
);


export default Header;
