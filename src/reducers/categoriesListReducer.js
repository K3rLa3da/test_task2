// @flow

import {SET_CATEGORIES_LIST} from '../constants/dispatchTypes';
import type {CategoryState} from '../constants/flowStatesTypes';
import type {CategoriesActionTypes} from '../constants/flowActionTypes';

function categoriesListReducer(state: Array<CategoryState> = [], action: CategoriesActionTypes): Array<CategoryState> {
    const {type, categories} = action;
    if (type === SET_CATEGORIES_LIST) {
        return categories;
    }
    return state;
}

export default categoriesListReducer;