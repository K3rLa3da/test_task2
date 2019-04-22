import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';


import coordinators from './coordinatorsListReducer';
import categories from './categoriesListReducer';
import currentUser from './currentUserReducer';

export default combineReducers({
    categories,
    coordinators,
    currentUser,
    form
});