// @flow
import type {CategoryState, CoordinatorState} from './flowStatesTypes';

/* Categories */
export type CategoriesActionTypes = { type: 'SET_CATEGORIES_LIST', categories: Array<CategoryState> }

/* Coordinators */
export type CoordinatorsActionTypes = { type: 'SET_COORDINATORS_LIST', coordinators: Array<CoordinatorState> }

/* Current User */
export type CurrentUserActionTypes = { type: 'SET_CURRENT_USER', user: CoordinatorState }


export type CommonActionType = CategoriesActionTypes | CoordinatorsActionTypes | CurrentUserActionTypes
