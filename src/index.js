import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';

import applicationStore from './applicationStore';

import './assets/styles/app_styles.scss';

ReactDOM.render(
    <Provider store={applicationStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
