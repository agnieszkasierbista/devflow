import React from 'react';
import {Link, Route} from 'react-router-dom';
import {StyledComputerScreen} from "./ComputerScreen.styled";
import CodeEditor from "../CodeEditor/CodeEditor";
import {Taskbar} from "../Taskbar/Taskbar.layout";
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";
import {WebBrowser} from "../WebBrowser/WebBrowser.layout";
import Communicator from '../Communicator/Communicator';
import {ComputerScreenProps} from './ComputerScreen.types';

export const ComputerScreen: React.FC<ComputerScreenProps> = (props) => {

    React.useEffect(() => {
        props.dispatchSetComputerScreenInitialInfo()
    }, [])

    return (
        <StyledComputerScreen>

            <Taskbar/>

            <Route path={codeEditorPath}>
                <CodeEditor/>
                <Link to="/">
                    Go back
                </Link>
            </Route>

            <Route path={communicatorPath}>
                <Communicator/>
                <Link to="/">
                    Go back
                </Link>
            </Route>

            <Route path={webBrowserPath}>
                <WebBrowser/>
                <Link to="/">
                    Go back
                </Link>
            </Route>

        </StyledComputerScreen>
    )
};