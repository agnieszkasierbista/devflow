import React from "react";
import {StyledCodeEditor} from "./CodeEditor.styled";
import {CodeEditorProps} from "./CodeEditor.types";
import TabBar from "./TabBar/TabBar";
import OpenedFiles from "./OpenedFiles/OpenedFiles";
import {codeEditorTabsPaths} from "./TabBar/TabBar.layout";


export const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    return (
        <StyledCodeEditor>
            <TabBar
                app={codeEditorTabsPaths}
            />
            <OpenedFiles/>
        </StyledCodeEditor>
    )
};
