import * as React from 'react';
import CoreLayout from '../layouts/CoreLayout';
import { Provider, Store } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import makeRootReducer from '../store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(makeRootReducer);

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CoreLayout />
            </Provider>
        );
    }
}

export default AppContainer;