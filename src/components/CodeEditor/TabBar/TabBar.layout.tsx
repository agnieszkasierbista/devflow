import {StyledCodeEditorTabLink, StyledTabBar} from "../CodeEditor.styled";
import React from "react";
import {TabBarProps} from "./TabBar.types";
import {
    configFilePath,
    funnyKittensPath,
    indexFilePath,
    mainFilePath,
    scrumBoardPath,
    taskPath
} from "../../../model/paths";

export const codeEditorTabsPaths = [configFilePath, indexFilePath, mainFilePath];
export const webBrowserTabsPaths = [taskPath, scrumBoardPath, funnyKittensPath];

export const TabBar: React.FC<TabBarProps> = (props) => {
    return (
        <StyledTabBar>
            {props.app.map((tabPath, idx) => {
                    return (
                        <StyledCodeEditorTabLink
                            key={idx}
                            to={tabPath}
                            onClick={() => {
                                props.app === codeEditorTabsPaths
                                    ?
                                    props.dispatchSetCurrentFile(props.codeEditorTabsList[idx])
                                    :
                                    props.dispatchSetCurrentFile(props.webBrowserTabsList[idx]);
                            }}
                        >

                            {

                                props.app === codeEditorTabsPaths
                                    ?
                                    props.codeEditorTabsList[idx]
                                    :
                                    props.webBrowserTabsList[idx]

                            }

                        </StyledCodeEditorTabLink>


                    )
                }
            )
            }

        </StyledTabBar>
    )
}