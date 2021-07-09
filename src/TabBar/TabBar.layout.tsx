import {StyledCodeEditorTab, StyledTabBar} from "../components/CodeEditor/CodeEditor.styled";
import React from "react";
import { Link } from "react-router-dom";
import {TabBarProps} from "./TabBar.types";
import {codeEditorTabsPaths} from "../components/OpenedFiles/OpenedFiles.layout";

export const TabBar: React.FC<TabBarProps> = (props) => {
    return (
        <StyledTabBar>
            {codeEditorTabsPaths.map((tabPath, idx) => {
                    return (
                        <StyledCodeEditorTab key={idx}>

                            <Link to={tabPath}>
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