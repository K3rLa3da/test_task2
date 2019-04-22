import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/rootReducer';

const applicationStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default applicationStore;
