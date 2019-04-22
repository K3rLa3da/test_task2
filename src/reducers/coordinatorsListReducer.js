// @flow

import {SET_COORDINATORS_LIST} from '../constants/dispatchTypes';
import type {CoordinatorState} from '../constants/flowStatesTypes';
import type {CoordinatorsActionTypes} from '../constants/flowActionTypes';

function coordinatorsListReducer(state: Array<CoordinatorState> = [], action: CoordinatorsActionTypes): Array<CoordinatorState> {
    const {type, coordinators} = action;
    if (type === SET_COORDINATORS_LIST) {
        return coordinators;
    }
    return state;
}

export default coordinatorsListReducer;