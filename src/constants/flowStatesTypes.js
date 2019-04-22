// @flow
import type {CommonActionType} from './flowActionTypes';

/* Category */
export type CategoryState = {
    id: number,
    name: string
}

/* Coordinator */
export type CoordinatorState = {
    id: number,
    name: string,
    lastname: string,
    email: string
}

/* Common */
export type CommonState = {
    categories: Array<CategoryState>,
    coordinators: Array<CoordinatorState>,
    currentUser: CoordinatorState,
    form: Object
}
export type Dispatch = (action: CommonActionType) => any;