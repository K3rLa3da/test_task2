// @flow
import React from 'react';
import {Field} from 'redux-form';

import ContentContainer from '../../common/ContentContainer';
import ContentHeader from '../../../elements/ContentHeader';
import Divider from '../../../elements/Divider';
import DefaultFieldContainer from '../DefaultFieldContainer';
import SimpleInput from '../../../elements/SimpleInput';
import TextArea from '../../../elements/TextArea';
import FieldText from '../../../elements/FieldText';
import PaymentFieldContainer from './PaymentFieldContainer';

import {validateMaxLength, validateNumber, validateRequired} from '../../../../utils/validators';

import commonStyles from '../../../../assets/styles/common.module.scss';
import CategoriesFieldContainer from './CategoriesFieldContainer';

const AboutContainer = () => (
    <ContentContainer>
        <ContentHeader content="About"/>
        <Divider/>
        <DefaultFieldContainer>
            <Field component={SimpleInput}
                   name="title"
                   placeholder="Make it short and clear"
                   className={commonStyles.full_width}
                   validate={[validateRequired]}
            />
        </DefaultFieldContainer>
        <DefaultFieldContainer className="top">
            <Field component={TextArea}
                   name="description"
                   className={commonStyles.full_width}
                   placeholder="Write about your event, be creative"
                   maxLength={140}
                   validate={[validateRequired, validateMaxLength(140)]}
            />
        </DefaultFieldContainer>
        <CategoriesFieldContainer/>
        <PaymentFieldContainer/>
        <DefaultFieldContainer>
            <Field component={SimpleInput}
                   name="reward"
                   placeholder="Number"
                   className={commonStyles.short_width}
                   validate={[validateNumber]}
            />
            <FieldText text="reward points for attendance"/>
        </DefaultFieldContainer>
    </ContentContainer>

);


export default AboutContainer;
