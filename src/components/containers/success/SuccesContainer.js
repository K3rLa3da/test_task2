// @flow
import React from 'react';

import Button from '../../elements/Button';
import ButtonContainer from '../common/ButtonContainer';
import ContentContainer from '../common/ContentContainer';
import ContentHeader from '../../elements/ContentHeader';

import {HOME_ROUTE_NAME} from '../../../constants/common';

import styles from '../../../assets/styles/common.module.scss';
import containerStyles from '../../../assets/styles/containers/success.module.scss';

type Props = {
    history: {
        push: Function
    }
}

const SuccessContainer = (props: Props) => {
    const {history} = props;

    const goBackFunc = () => history.push(HOME_ROUTE_NAME);
    return (
        <ContentContainer className={containerStyles.container}>
            <ContentHeader content="Success"
                           className={styles.green}
            />
            Event has been created.
            <ButtonContainer>
                <Button content="CREATE EVENT"
                        onClick={goBackFunc}
                        className={containerStyles.button}
                />
            </ButtonContainer>
        </ContentContainer>
    );
};


export default SuccessContainer;
