import React from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import {StyledComputerScreen} from "./ComputerScreen.styled";
import {history} from "../../history";
import {CodeEditor} from "../CodeEditor/CodeEditor.layout";
import {Taskbar} from "../Taskbar/Taskbar.layout";

export function ComputerScreenLayout() {
    return (
        <StyledComputerScreen>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Taskbar />
                    </Route>

                    <Route path="/CodeEditor">
                        <Taskbar />
                        <CodeEditor />
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path="/Communicator">
                        <Taskbar />
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path="/WebBrowser">
                        <Taskbar />
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>
                </Switch>

            </Router>


        </StyledComputerScreen>
    )
}