import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledOpenedFiles} from "./OpenedTabs.styled";
import {OpenedTabsProps} from "./OpenedTabs.types";
import DragAndDropTask from "../../CodeEditor/DragAndDropTask/DragAndDropTask";
import ScrumBoard from "../ScrumBoard/ScrumBoard";
import MemoryGame from "../../common/MemoryGame/MemoryGame";
import {
    configFilePath,
    funnyDogsPath,
    funnyKittensPath,
    funnyLizardsPath,
    scrumBoardPath,
    taskPath,
    webBrowserTabsPaths
} from "../../../model/paths";


export const OpenedTabs: React.FC<OpenedTabsProps> = (props) => {

    return (

        <Switch>
            {props.files
                .filter((file) => file.component === "web_browser")
                .map((file, idx) => {

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
                        [funnyDogsPath]: function () {
                            return (
                                <MemoryGame
                                    fileName={"props.currentFile.fileName"}
                                />
                            )
                        },
                        [funnyLizardsPath]: function () {
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
                            path={file.path}
                        >

                            {
                                webBrowserComponentsHandler[file.path]()
                            }

                        </Route>
                    )
                })}
        </Switch>

    )
}
