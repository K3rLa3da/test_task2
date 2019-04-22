// @flow

import {setCategoriesList, setCoordinatorsList, setCurrentUser} from './actionCreators';
import {DEFAULT_CATEGORIES_DATA, DEFAULT_COORDINATORS_DATA} from '../constants/common';

import type {Dispatch} from '../constants/flowStatesTypes';

export const apiLoadCategories = () => (dispatch: Dispatch) => {
    // API call here
    dispatch(setCategoriesList(DEFAULT_CATEGORIES_DATA));
};

export const apiLoadCoordinators = () => (dispatch: Dispatch) => {
    // API call here
    dispatch(setCoordinatorsList(DEFAULT_COORDINATORS_DATA));
    const currentUser = DEFAULT_COORDINATORS_DATA.find(user => user.id === 3);
    if (currentUser) {
        dispatch(setCurrentUser(currentUser)); // according to task description
    }
};