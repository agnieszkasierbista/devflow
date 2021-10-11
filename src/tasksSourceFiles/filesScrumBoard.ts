import {scrumBoardPath} from "../model/paths";
import {FileScrumBoard} from "../model/state";

export const filesScrumBoard : FileScrumBoard[] = [
    {
        fileName: "Scrum Board",
        itemsArray: [
            ["Task_1", "", "", ""],
            ["Task_2", "", "", ""],
            ["Task_3", "", "", ""],
            ["Task_4", "", "", ""]
        ],
        shuffledItemsArray: [
            ["Task_1", "", "", ""],
            ["Task_2", "", "", ""],
            ["Task_3", "", "", ""],
            ["Task_4", "", "", ""]
        ],
        beingDragged: -1,
        taskType: "scrumBoard",
        path: scrumBoardPath,
        component: "web_browser",
    }];