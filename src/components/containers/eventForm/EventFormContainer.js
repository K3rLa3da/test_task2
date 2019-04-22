// @flow
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EventFormWrapper from './EventFormWrapper';

import {apiLoadCategories, apiLoadCoordinators} from '../../../actions/actions';

import type {Dispatch} from '../../../constants/flowStatesTypes';

type Props = {
    actions: {
        apiLoadCategories: Function,
        apiLoadCoordinators: Function,
    }
}

const EventFormContainer = (props: Props) => {
    const {actions: {apiLoadCategories, apiLoadCoordinators}} = props;

    useEffect(() => {
        apiLoadCategories();
        apiLoadCoordinators();
    }, []);

    return (
        <EventFormWrapper {...props}/>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
    {
        actions: bindActionCreators({
            apiLoadCategories,
            apiLoadCoordinators
        }, dispatch)
    }
);

export default connect(null, mapDispatchToProps)(EventFormContainer);
