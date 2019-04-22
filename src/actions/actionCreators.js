// @flow

import {SET_CATEGORIES_LIST, SET_COORDINATORS_LIST, SET_CURRENT_USER} from '../constants/dispatchTypes';
import type {CategoryState, CoordinatorState} from '../constants/flowStatesTypes';
import type {
    CategoriesActionTypes,
    CoordinatorsActionTypes,
    CurrentUserActionTypes
} from '../constants/flowActionTypes';

export const setCategoriesList = (categories: Array<CategoryState>): CategoriesActionTypes => ({
    type: SET_CATEGORIES_LIST,
    categories
});

export const setCoordinatorsList = (coordinators: Array<CoordinatorState>): CoordinatorsActionTypes => ({
    type: SET_COORDINATORS_LIST,
    coordinators
});

export const setCurrentUser = (user: CoordinatorState): CurrentUserActionTypes => ({
    type: SET_CURRENT_USER,
    user
});