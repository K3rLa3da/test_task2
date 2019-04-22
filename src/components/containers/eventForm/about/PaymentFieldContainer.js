// @flow
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Field, formValueSelector} from 'redux-form';

import DefaultFieldContainer from '../DefaultFieldContainer';
import RadioInputWrapper from '../RadioInputWrapper';
import SimpleInput from '../../../elements/SimpleInput';
import FieldText from '../../../elements/FieldText';

import {validateNumber, validateRequired} from '../../../../utils/validators';
import {FIELDS_LABELS} from '../../../../constants/common';

import commonStyles from '../../../../assets/styles/common.module.scss';

import type {CommonState} from '../../../../constants/flowStatesTypes';

type Props = {
    isEventPaid: string
}

const PaymentFieldContainer = (props: Props) => {
    const {isEventPaid} = props;
    const inputs = [
        {name: 'paid_event', value: 'false', label: 'Free event'},
        {name: 'paid_event', value: 'true', label: 'Paid event'},
    ];

    return (
        <DefaultFieldContainer>
            <RadioInputWrapper inputs={inputs}
                               label={FIELDS_LABELS.paid_event}
            />
            {isEventPaid === 'true' &&
            <Fragment>
                <Field component={SimpleInput}
                       name="event_fee"
                       placeholder="Fee"
                       className={commonStyles.short_width}
                       validate={[validateRequired, validateNumber]}
                />
                <FieldText text="$"/>
            </Fragment>}
        </DefaultFieldContainer>
    );
};

const selector = formValueSelector('eventForm');

const mapStateToProps = (state: CommonState) => {
    const isEventPaid = selector(state, 'paid_event');
    return {isEventPaid};
};

export default connect(mapStateToProps)(PaymentFieldContainer);
