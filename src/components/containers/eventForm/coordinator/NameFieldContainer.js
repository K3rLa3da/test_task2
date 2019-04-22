// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Field, change} from 'redux-form';
import {components} from 'react-select';

import DefaultFieldContainer from '../DefaultFieldContainer';
import DropdownInput from '../../../elements/DropdownInput';

import {validateRequired} from '../../../../utils/validators';

import type {CoordinatorState, CommonState} from '../../../../constants/flowStatesTypes';

type Props = {
    coordinators: Array<CoordinatorState>,
    currentUser: CoordinatorState,
    updateEmail: Function
}

const NameFieldContainer = (props: Props) => {
    const {coordinators, updateEmail, currentUser} = props;

    const getOption = coordinator => ({
        value: coordinator.id,
        label: `${coordinator.name} ${coordinator.lastname}`
    });

    const otherOptions = coordinators.reduce((options, coordinator) => {
        if (coordinator.id !== currentUser.id) {
            options.push(getOption(coordinator));
        }
        return options;
    }, []);

    const groupedOptions = [
        {
            label: 'Me',
            options: [getOption(currentUser)],
        },
        {
            label: 'Others',
            options: otherOptions,
        },
    ];

    const Group = props => (
        <div>
            <components.Group {...props}/>
        </div>
    );

    const onNameChange = value => {
        const selectedCoordinator = coordinators.find(coordinator => coordinator.id === value);
        if (selectedCoordinator) {
            updateEmail('coordinator.email', selectedCoordinator.email || '');
        }
    };

    return (
        <DefaultFieldContainer>
            <Field component={DropdownInput}
                   name="id"
                   options={groupedOptions}
                   placeholder="Select coordinator"
                   onChange={onNameChange}
                   validate={[validateRequired]}
                   components={{Group}}
            />
        </DefaultFieldContainer>
    );
};


const mapStateToProps = (state: CommonState) => ({
    coordinators: state.coordinators,
    currentUser: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
    updateEmail: (field, data) => dispatch(change('eventForm', field, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NameFieldContainer);
