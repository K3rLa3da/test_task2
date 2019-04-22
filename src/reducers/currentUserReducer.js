// @flow

import {SET_CURRENT_USER} from '../constants/dispatchTypes';
import type {CoordinatorState} from '../constants/flowStatesTypes';
import type {CurrentUserActionTypes} from '../constants/flowActionTypes';

const initialState = {};

function currentUserReducer(state: CoordinatorState, action: CurrentUserActionTypes) {
    const {type, user} = action;
    if (type === SET_CURRENT_USER) {
        return user;
    }
    return state || initialState;
}

export default currentUserReducer;