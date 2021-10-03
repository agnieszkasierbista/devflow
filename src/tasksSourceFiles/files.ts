import {filesMemoryGame} from "./filesMemoryGame";
import {filesScrumBoard} from "./filesScrumBoard";
import {filesPairMatching} from "./filesPairMatching";
import {
    CodeEditorPaths,
    Files,
    FilesDragAndDrop,
    FilesMemoryGame,
    FilesPairMatching,
    FilesScrumBoard
} from "../model/state";
import {filesDragAndDrop} from "./filesDragAndDrop";

const getFiles = (): Files<CodeEditorPaths> => {
    const emptyArray: Files<CodeEditorPaths> = [];
    const aber: FilesScrumBoard[] = filesScrumBoard;
    const abee: FilesPairMatching[] = filesPairMatching;
    const abewe: FilesDragAndDrop[] = filesDragAndDrop;
    const ewer: FilesMemoryGame[] = filesMemoryGame;

    // @ts-ignore
    const allFiles: Files<CodeEditorPaths> = emptyArray.concat(aber).concat(abee).concat(abewe).concat(ewer);
    return allFiles
}

export const files = getFiles();