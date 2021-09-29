import {StyledCodeEditorTabLink, StyledTabBar} from "../CodeEditor.styled";
import React from "react";
import {TabBarProps} from "./TabBar.types";
import {arrayDiff} from "../../../helpers/arrayDiff.helpers";


export const TabBar: React.FC<TabBarProps> = (props) => {

    const filteredOutFinishedGamesNames = arrayDiff(props.files.map((file) => file.fileName), props.finishedGameNames);
    const currentFiles = props.files.filter((file) => filteredOutFinishedGamesNames.includes(file.fileName)) || []
    // TODO: tutaj musze jakos wyciagnac zawartosc obiektow i porownac do tabelki

    const availableCodeEditorTabsList = currentFiles
        .filter((file) => file.component === "code_editor")
        .slice(0, 3)
        .map((file) => file.fileName);
    const availableWebBrowserTabsList = currentFiles
        .filter((file) => file.component === "web_browser")
        .slice(0, 3)
        .map((file) => file.fileName);

    return (
        <StyledTabBar>
            {props.app === "codeEditor"

                ?

                availableCodeEditorTabsList.map((tabName, idx) => {
                    return (
                        <StyledCodeEditorTabLink
                            key={idx}
                            to={props.files.find((file) => file.fileName === tabName)?.path || ""}
                            onClick={() => {
                                    props.dispatchSetCurrentFile(tabName)
                            }}
                        >

                            {
                               tabName
                            }

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

                            {
                                tabName
                            }

                        </StyledCodeEditorTabLink>
                    )
                })

            }

        </StyledTabBar>
    )
}