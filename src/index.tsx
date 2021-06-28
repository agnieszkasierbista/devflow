import React from 'react';
import ReactDOM from 'react-dom';
import {Workspace} from "./components/Workspace/Workspace.layout";
import {GlobalStyle} from "./components/GlobalStyle/GlobalStyle";
import {store} from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <Workspace/>
    </Provider>,
    document.getElementById('root')
);

