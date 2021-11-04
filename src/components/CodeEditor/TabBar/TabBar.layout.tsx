import {StyledCodeEditorTabLink, StyledTabBar} from "../CodeEditor.styled";
import React from "react";
import {TabBarProps} from "./TabBar.types";
import {arrayDiff} from "../../../helpers/arrayDiff.helpers";
import { useHistory, useLocation } from 'react-router-dom';


export const TabBar: React.FC<TabBarProps> = (props) => {

    const unfinishedGamesNames = arrayDiff(props.files.map((file) => file.fileName), props.finishedGameNames);
    const currentFiles = props.files.filter((file) => unfinishedGamesNames.includes(file.fileName)) || []

    const availableCodeEditorTabsList = currentFiles
        .filter((file) => file.component === "code_editor")
        .slice(0, 3)
        .map((file) => file.fileName);

    const availableWebBrowserTabsList = currentFiles
        .filter((file) => file.component === "web_browser")
        .slice(0, 3)
        .map((file) => file.fileName);

    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        if(availableCodeEditorTabsList && props.app === "codeEditor") {
            props.dispatchSetCurrentFile(availableCodeEditorTabsList[0])
            history.push(location.pathname + "/main-file")
        } else if(availableWebBrowserTabsList && props.app === "webBrowser") {
            props.dispatchSetCurrentFile(availableWebBrowserTabsList[0])
            history.push(location.pathname + "/scrum-board-path")
        } else {
            console.log("no elements to render")
        }

    }, [])

    return (
        <StyledTabBar>
            {props.app === "codeEditor"
                ? availableCodeEditorTabsList.map((tabName, idx) => {
                    return (
                        <StyledCodeEditorTabLink
                            key={idx}
                            to={props.files.find((file) => file.fileName === tabName)?.path || ""}
                            onClick={() => {
                                    props.dispatchSetCurrentFile(tabName)
                            }}
                        >
                            { tabName }
                        </StyledCodeEditorTabLink>
                    )
                })

                :

                availableWebBrowserTabsList.map((tabName, idx) => {
                    return (
                        <StyledCodeEditorTabLink
                            key={idx}
                            to={props.files.find((file) => file.fileName === tabName)?.path || ""}
                            onClick={() => {
                                props.dispatchSetCurrentFile(tabName)
                            }}
                        >
                            { tabName }
                        </StyledCodeEditorTabLink>
                    )
                })

            }

        </StyledTabBar>
    )
}