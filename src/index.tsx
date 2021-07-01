import React from 'react';
import ReactDOM from 'react-dom';
import {Workspace} from "./components/Workspace/Workspace.layout";
import {GlobalStyle} from "./components/GlobalStyle/GlobalStyle";
import {store} from './store';
import {Provider} from 'react-redux';
import {history} from "./history";
import {Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <Router history={history}>
            <Workspace/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

