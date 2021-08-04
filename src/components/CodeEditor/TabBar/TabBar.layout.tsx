import {StyledCodeEditorTab, StyledTabBar} from "../CodeEditor.styled";
import React from "react";
import {Link} from "react-router-dom";
import {TabBarProps} from "./TabBar.types";
import {configFilePath, indexFilePath, mainFilePath} from "../../../model/paths";

export const codeEditorTabsPaths = [configFilePath, indexFilePath, mainFilePath];

export const TabBar: React.FC<TabBarProps> = (props) => {
    return (
        <StyledTabBar>
            {codeEditorTabsPaths.map((tabPath, idx) => {
                    return (
                        <StyledCodeEditorTab key={idx}>

                            <Link to={tabPath}
                                  onClick={() => props.dispatchSetCurrentFile(props.codeEditorTabsList[idx])}
                            >
                                {props.codeEditorTabsList[idx]}
                            </Link>

                        </StyledCodeEditorTab>
                    )
                }
            )
            }

        </StyledTabBar>
    )
}