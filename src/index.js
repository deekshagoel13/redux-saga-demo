import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const sagaMiddleware=createSagaMiddleware();
const history=createHistory();
const Store=createStore(rootReducer,applyMiddleware(sagaMiddleware,routerMiddleware(history)));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

