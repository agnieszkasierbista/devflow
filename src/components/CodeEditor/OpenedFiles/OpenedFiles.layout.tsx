import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedFiles.styled";
import DragAndDropTask from "../DragAndDropTask/DragAndDropTask";
import {codeEditorTabsPaths} from "../TabBar/TabBar.layout";
import PairMatching from "../PairMatching/PairMatching";
import {configFilePath, indexFilePath, mainFilePath} from "../../../model/paths";


export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {

    return (
        <StyledOpenedFiles>
            <Switch>
                {codeEditorTabsPaths.map((tabPath, idx) => {

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

                        <Route key={idx} path={tabPath}>
                            {
                                codeEditorComponentsHandler[tabPath]()

                            }
                        </Route>

                    )
                })}
            </Switch>
        </StyledOpenedFiles>
    )
}
