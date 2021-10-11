import {mainFilePath} from "../model/paths";
import {FilePairMatching} from "../model/state";

export const filesPairMatching : FilePairMatching[] = [
    {
        fileName: "main.file",
        itemsArray: [["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"]],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "pairMatching",
        path: mainFilePath,
        component: "code_editor",
    },
];