import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedFiles.styled";
import DragAndDropTask from "../DragAndDropTask/DragAndDropTask";
import PairMatching from "../PairMatching/PairMatching";
import {configFilePath, indexFilePath, mainFilePath} from "../../../model/paths";
import {CodeEditorComponentsHandlers} from "../../../model/state";


export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {

    return (
        <StyledOpenedFiles>
            <Switch>
                {props.files
                    .filter((file) => file.component === "code_editor")
                    .map((file, idx) => {

                    const codeEditorComponentsHandler: CodeEditorComponentsHandlers = {
                        [configFilePath]: function () {
                            return (
                                <DragAndDropTask/>
                            )
                        },
                        [indexFilePath]: function () {
                            return (
                                <DragAndDropTask/>
                            )
                        },
                        [mainFilePath]: function () {
                            return (
                                <PairMatching/>
                            )
                        },
                    }

                    return (

                        <Route
                            key={idx}
                            path={file.path}
                        >

                            {
                                codeEditorComponentsHandler[file.path]()
                            }
                        </Route>

                    )
                })}
            </Switch>
        </StyledOpenedFiles>
    )
}
