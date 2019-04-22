// @flow
import React from 'react';
import {FormSection} from 'redux-form';

import ContentContainer from '../../common/ContentContainer';
import ContentHeader from '../../../elements/ContentHeader';
import Divider from '../../../elements/Divider';
import NameFieldContainer from './NameFieldContainer';
import EmailFieldContainer from './EmailFieldContainer';


const CoordinatorContainer = () => (
    <ContentContainer>
        <ContentHeader content="Coordinator"/>
        <Divider/>
        <FormSection name="coordinator">
            <NameFieldContainer/>
            <EmailFieldContainer/>
        </FormSection>
    </ContentContainer>

);


export default CoordinatorContainer;
