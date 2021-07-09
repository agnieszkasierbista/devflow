import React from "react";
import {StyledCodeEditor} from "./CodeEditor.styled";
import {configFilePath, indexFilePath, mainFilePath} from "../../model/paths";
import {CodeEditorProps} from "./CodeEditor.types";
import TabBar from "../../TabBar/TabBar";

export const codeEditorTabsPaths = [configFilePath, indexFilePath, mainFilePath];


export const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    return (
        <StyledCodeEditor>
            <TabBar/>
        </StyledCodeEditor>
    )
};
