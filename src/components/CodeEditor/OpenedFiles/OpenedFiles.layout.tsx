import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedFiles.styled";
import DragAndDropTask from "../DragAndDropTask/DragAndDropTask";
import PairMatching from "../PairMatching/PairMatching";
import {codeEditorTabsPaths, configFilePath, indexFilePath, mainFilePath} from "../../../model/paths";


export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {

    return (
        <StyledOpenedFiles>
            <Switch>
                {props.files
                    .filter((file) => file.component === "code_editor")
                    .map((file, idx) => {

                    const codeEditorComponentsHandler: any = {
                        [configFilePath]: function () {
                            return (
                                <DragAndDropTask
                                    fileName={"props.currentFile.fileName"}
                                    // fileName={props.currentFile.fileName}
                                />
                            )
                        },
                        [indexFilePath]: function () {
                            return (
                                <DragAndDropTask
                                    fileName={"props.currentFile.fileName"}
                                    // fileName={props.currentFile.fileName}
                                />
                            )
                        },
                        [mainFilePath]: function () {
                            return (
                                <PairMatching
                                    fileName={"props.currentFile.fileName"}
                                />
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
