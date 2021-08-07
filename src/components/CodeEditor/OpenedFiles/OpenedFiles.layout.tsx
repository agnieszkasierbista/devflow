import {OpenedFilesProps} from "./OpenedFiles.types"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedFiles.styled";
import DragAndDropTask from "../DragAndDropTask/DragAndDropTask";
import {codeEditorTabsPaths} from "../TabBar/TabBar.layout";
import PairMatching from "../PairMatching/PairMatching";


export const OpenedFiles: React.FC<OpenedFilesProps> = (props) => {

    return (
        <StyledOpenedFiles>
            <Switch>
                {codeEditorTabsPaths.map((tabPath, idx) => {
                    return (

                        <Route key={idx} path={tabPath}>
                            <div>
                                Task:
                                {
                                    props.currentFile
                                        ?
                                        (
                                            props.currentFile.taskType === "dragAndDrop"
                                            ?
                                                <DragAndDropTask
                                                fileName={props.currentFile.fileName}
                                                />
                                                :
                                                <PairMatching
                                                    fileName={props.currentFile.fileName}
                                                />
                                        )
                                        : <div>Nie ma taska!</div>

                                }
                            </div>
                        </Route>

                    )
                })}
            </Switch>
        </StyledOpenedFiles>
    )
}
