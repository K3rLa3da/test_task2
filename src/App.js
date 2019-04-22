// @flow
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/elements/Header';
import EventFormContainer from './components/containers/eventForm/EventFormContainer';
import SuccessContainer from './components/containers/success/SuccesContainer';

import {HOME_ROUTE_NAME, SUCCESS_ROUTE_NAME} from './constants/common';

type Props = {
    history: {
        push: Function
    }
}

const App = (props: Props) => {
    const {history} = props;
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact
                           path={HOME_ROUTE_NAME}
                           history={history}
                           component={EventFormContainer}
                    />
                    <Route path={SUCCESS_ROUTE_NAME}
                           history={history}
                           component={SuccessContainer}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};


export default App;
