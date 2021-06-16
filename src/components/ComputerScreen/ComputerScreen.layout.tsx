import React from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import {StyledComputerScreen} from "./ComputerScreen.styled";
import {history} from "../../history";
import {CodeEditor} from "../CodeEditor/CodeEditor.layout";

export function ComputerScreenLayout() {
    return (
        <StyledComputerScreen>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Link to="/1">
                            Code Editor
                        </Link>
                        <Link to="/2">
                            Communicator
                        </Link>
                        <Link to="/3">
                            Web browser
                        </Link>
                    </Route>

                    <Route path="/1">
                        <CodeEditor />
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path="/2">
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path="/3">
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>
                </Switch>

            </Router>


        </StyledComputerScreen>
    )
}