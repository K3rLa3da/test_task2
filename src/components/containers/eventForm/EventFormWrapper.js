// @flow
import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import AboutContainer from './about/AboutContainer';
import Button from '../../elements/Button';
import ButtonContainer from '../common/ButtonContainer';
import CoordinatorContainer from './coordinator/CoordinatorContainer';
import WhenContainer from './when/WhenContainer';

import {SUCCESS_ROUTE_NAME} from '../../../constants/common';

import type {CommonState, CoordinatorState} from '../../../constants/flowStatesTypes';

type Props = {
    history: {
        push: Function
    },
    handleSubmit: Function
}

const EventFormWrapper = (props: Props) => {
    const {history, handleSubmit} = props;

    const submitForm = form => {
        const {clock, starts_at, starts_on, duration, paid_event, reward, event_fee, ...restForm} = form;

        const generateTime = () => (
            clock === 'PM' ? `${parseInt(starts_at, 10) + 12}:${starts_at.substring(3)}` : starts_at
        );

        const processedForm = {
            ...restForm,
            date: `${starts_on}T${generateTime()}`,
            duration: duration && duration * 3600,
            paid_event: paid_event === 'true',
            event_fee: event_fee && parseFloat(event_fee),
            reward: reward && parseFloat(reward),
        };

        console.log(processedForm); // output

        history.push(SUCCESS_ROUTE_NAME);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <AboutContainer/>
            <CoordinatorContainer/>
            <WhenContainer/>
            <ButtonContainer>
                <Button content="PUBLISH EVENT"
                        type="submit"
                />
            </ButtonContainer>
        </form>
    );
};

const getFormInitialValues = (currentUser: CoordinatorState) => ({
    paid_event: 'false',
    clock: 'AM',
    coordinator: {
        id: currentUser && currentUser.id,
        email: currentUser && currentUser.email
    }
});

const mapStateToProps = (state: CommonState) => {
    const {currentUser} = state;
    return {
        initialValues: getFormInitialValues(currentUser),
    };
};

const EventForm = reduxForm({
    form: 'eventForm',
    enableReinitialize: true,
})(EventFormWrapper);

export default connect(mapStateToProps)(EventForm);
