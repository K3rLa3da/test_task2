// @flow
import React from 'react';
import {Field} from 'redux-form';

import ContentContainer from '../../common/ContentContainer';
import ContentHeader from '../../../elements/ContentHeader';
import DefaultFieldContainer from '../DefaultFieldContainer';
import Divider from '../../../elements/Divider';
import FieldText from '../../../elements/FieldText';
import RadioInputWrapper from '../RadioInputWrapper';
import SimpleInput from '../../../elements/SimpleInput';

import {validateNumber, validateRequired} from '../../../../utils/validators';

const WhenContainer = () => {
    const minDate = new Date().toISOString().substring(0, 10);
    const inputs = [
        {name: 'clock', value: 'AM', label: 'AM'},
        {name: 'clock', value: 'PM', label: 'PM'},
    ];
    return (
        <ContentContainer>
            <ContentHeader content="When"/>
            <Divider/>
            <DefaultFieldContainer>
                <Field component={SimpleInput}
                       name="starts_on"
                       type="date"
                       min={minDate}
                       validate={[validateRequired]}
                />
                <FieldText text="at"/>
                <Field component={SimpleInput}
                       name="starts_at"
                       type="time"
                       validate={[validateRequired]}
                />
                <RadioInputWrapper inputs={inputs}/>
            </DefaultFieldContainer>
            <DefaultFieldContainer>
                <Field component={SimpleInput}
                       name="duration"
                       placeholder="Number"
                       validate={[validateNumber]}
                />
                <FieldText text="hour"/>
            </DefaultFieldContainer>
        </ContentContainer>
    );
};


export default WhenContainer;
