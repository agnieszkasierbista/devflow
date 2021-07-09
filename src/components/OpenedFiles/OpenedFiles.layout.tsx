import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {configFilePath, indexFilePath, mainFilePath} from "../../model/paths";
import { StyledOpenedFiles } from "./OpenedFiles.styled";

export const codeEditorTabsPaths = [configFilePath, indexFilePath, mainFilePath];

export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {
    return(
        <StyledOpenedFiles>
            {props.openedFiles.map((file, idx) => {
                return(
                    <Switch>
                        <Route path={codeEditorTabsPaths[idx]}>
                    <div key={idx}>
                    {
                        file
                    }
                    </div>
                        </Route>
                    </Switch>
                )
            })}
        </StyledOpenedFiles>
    )
}
