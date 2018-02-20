import * as React from 'react';
import CoreLayout from '../layouts/CoreLayout';
import { Provider, Store } from 'react-redux';
import { createStore } from 'redux';
import makeRootReducer from '../store/reducers';

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