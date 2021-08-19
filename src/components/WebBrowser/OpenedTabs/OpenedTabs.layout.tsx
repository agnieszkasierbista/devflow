import React from "react";
import {Route, Switch} from "react-router-dom";
import {webBrowserTabsPaths} from "../../CodeEditor/TabBar/TabBar.layout";
import {StyledOpenedFiles} from "./OpenedTabs.styled";
import {OpenedTabsProps} from "./OpenedTabs.types";
import DragAndDropTask from "../../CodeEditor/DragAndDropTask/DragAndDropTask";
import ScrumBoard from "../ScrumBoard/ScrumBoard";
import MemoryGame from "../../common/MemoryGame/MemoryGame";
import {funnyKittensPath, scrumBoardPath, taskPath} from "../../../model/paths";


export const OpenedTabs: React.FC<OpenedTabsProps> = (props) => {

    return (

        <Switch>
            {webBrowserTabsPaths.map((tabPath, idx) => {

                const webBrowserComponentsHandler: any = {
                    [taskPath]: function () {
                        return (
                            <DragAndDropTask
                                fileName={"props.currentFile.fileName"}
                                // fileName={props.currentFile.fileName}
                            />
                        )
                    },
                    [scrumBoardPath]: function () {
                        return (
                            <ScrumBoard
                                fileName={"props.currentFile.fileName"}
                            />
                        )
                    },
                    [funnyKittensPath]: function () {
                        return (
                            <MemoryGame
                                fileName={"props.currentFile.fileName"}
                            />
                        )
                    },
                }

                return (

                    <Route
                        key={idx}
                        path={tabPath}
                    >
                        <StyledOpenedFiles
                            key={idx}
                        >
                            {
                                webBrowserComponentsHandler[tabPath]()
                            }
                        </StyledOpenedFiles>
                    </Route>

                )
            })}
        </Switch>

    )
}
