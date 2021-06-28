import {applyMiddleware, createStore} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./epics";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(epicMiddleware)
    ));

epicMiddleware.run(rootEpic);
