import {StyledCodeEditorTab, StyledTabBar} from "../CodeEditor.styled";
import React from "react";
import {Link} from "react-router-dom";
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
                        <StyledCodeEditorTab key={idx}>

                            <Link to={tabPath}
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
                            </Link>

                        </StyledCodeEditorTab>
                    )
                }
            )
            }

        </StyledTabBar>
    )
}