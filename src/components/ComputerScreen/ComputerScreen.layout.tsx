import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {StyledComputerScreen} from "./ComputerScreen.styled";
import CodeEditor from "../CodeEditor/CodeEditor";
import {Taskbar} from "../Taskbar/Taskbar.layout";
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";
import {WebBrowser} from "../WebBrowser/WebBrowser.layout";
import Communicator from '../Communicator/Communicator';

export function ComputerScreen() {
    return (
        <StyledComputerScreen>
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
                    <Communicator/>
                    <Link to="/">
                        Go back
                    </Link>
                </Route>

                <Route path={webBrowserPath}>
                    <Taskbar/>
                    <WebBrowser/>
                    <Link to="/">
                        Go back
                    </Link>
                </Route>
            </Switch>
        </StyledComputerScreen>
    )
}