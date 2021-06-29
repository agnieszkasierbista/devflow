import React from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import {StyledComputerScreen} from "./ComputerScreen.styled";
import {history} from "../../history";
import {CodeEditor} from "../CodeEditor/CodeEditor.layout";
import {Taskbar} from "../Taskbar/Taskbar.layout";
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";

export function ComputerScreen() {
    return (
        <StyledComputerScreen>
            <Router history={history}>

                <Switch>
                    <Route exact path="/">
                        <Taskbar/>
                    </Route>

                    <Route path={codeEditorPath}>
                        <Taskbar/>
                        <CodeEditor/>
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path={communicatorPath}>
                        <Taskbar/>
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>

                    <Route path={webBrowserPath}>
                        <Taskbar/>
                        <Link to="/">
                            Go back
                        </Link>
                    </Route>
                </Switch>

            </Router>

        </StyledComputerScreen>
    )
}