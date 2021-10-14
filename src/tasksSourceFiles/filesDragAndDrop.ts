import {configFilePath, indexFilePath, taskPath} from "../model/paths";
import {FileDragAndDrop} from "../model/state";

export const filesDragAndDrop : FileDragAndDrop[] = [
    {
        fileName: "config.file",
        items: ["1", "2", "3", "4", "5"],
        shuffledItems: ["5", "3", "2", "1", "4"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: configFilePath,
        component: "code_editor",
    },
    {
        fileName: "index.file",
        items: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        shuffledItems: ["j", "b", "f", "a", "h", "i", "g", "c", "e", "d"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: indexFilePath,
        component: "code_editor"
    },
    {
        fileName: "Task",
        items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
        shuffledItems: ["7", "4", "12", "2", "9", "11", "3", "5", "13", "1", "14", "6", "8", "10"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "dragAndDrop",
        path: taskPath,
        component: "web_browser",
    },
];