import React from "react";
import {StyledCodeEditor} from "./CodeEditor.styled";
import {CodeEditorProps} from "./CodeEditor.types";
import TabBar from "./TabBar/TabBar";
import OpenedFiles from "./OpenedFiles/OpenedFiles";


export const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    return (
        <StyledCodeEditor>
            <TabBar/>
            <OpenedFiles/>
        </StyledCodeEditor>
    )
};
