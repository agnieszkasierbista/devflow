import {StyledCodeEditorTab, StyledTabBar} from "../components/CodeEditor/CodeEditor.styled";
import {codeEditorTabsPaths} from "../components/CodeEditor/CodeEditor.layout";
import React from "react";
import { Link } from "react-router-dom";
import {TabBarProps} from "./TabBar.types";

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