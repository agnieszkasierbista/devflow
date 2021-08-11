import React from "react";
import {Route, Switch} from "react-router-dom";
import {webBrowserTabsPaths} from "../../CodeEditor/TabBar/TabBar.layout";
import {StyledOpenedFiles} from "./OpenedTabs.styled";
import {OpenedTabsProps} from "./OpenedTabs.types";
import DragAndDropTask from "../../CodeEditor/DragAndDropTask/DragAndDropTask";
import PairMatching from "../../CodeEditor/PairMatching/PairMatching";
import ScrumBoard from "../ScrumBoard/ScrumBoard";


export const OpenedTabs: React.FC<OpenedTabsProps> = (props) => {

    return (

            <Switch>
                {webBrowserTabsPaths.map((tabPath, idx) => {
                    return (

                        <Route
                            key={idx}
                            path={tabPath}
                        >
                            <StyledOpenedFiles
                                key={idx}
                            >
                                {
                                    props.currentFile.taskType !== "scrumBoard"
                                        ?
                                        "Task:"
                                        :
                                        null
                                }
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
                                                <ScrumBoard
                                                    fileName={props.currentFile.fileName}
                                                />
                                        ) :
                                        <div>Nie ma taska!</div>

                                }
                            </StyledOpenedFiles>
                        </Route>

                    )
                })}
            </Switch>

    )
}
