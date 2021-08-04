import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedFiles.styled";
import DragAndDropTask from "../DragAndDropTask/DragAndDropTask";
import {codeEditorTabsPaths} from "../TabBar/TabBar.layout";


export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {
    return (
        <StyledOpenedFiles>
            <Switch>
                {codeEditorTabsPaths.map((tabPath, idx) => {
                    return (

                        <Route key={idx} path={tabPath}>
                            <div >
                                <DragAndDropTask
                                fileName={props.codeEditorTabsList[idx]}

                                />
                            </div>
                        </Route>

                    )
                })}
            </Switch>
        </StyledOpenedFiles>
    )
}
