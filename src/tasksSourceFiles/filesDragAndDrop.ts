import {configFilePath, indexFilePath, taskPath} from "../model/paths";
import {FileDragAndDrop} from "../model/state";

export const filesDragAndDrop : FileDragAndDrop[] = [
    {
        fileName: "config.file",
        items: ["f", "g", "h", "i", "j"],
        shuffledItems: ["f", "h", "j", "i", "g"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: configFilePath,
        component: "code_editor",
    },
    {
        fileName: "index.file",
        items: ["a", "b", "c", "d", "e"],
        shuffledItems: ["b", "a", "c", "e", "d"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: indexFilePath,
        component: "code_editor"
    },
    {
        fileName: "Task",
        items: ["a", "b", "c", "d", "e"],
        shuffledItems: ["b", "a", "c", "e", "d"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: taskPath,
        component: "web_browser",
    },
];