import {filesMemoryGame} from "./filesMemoryGame";
import {filesScrumBoard} from "./filesScrumBoard";
import {filesPairMatching} from "./filesPairMatching";
import {Files, FilesDragAndDrop, FilesMemoryGame, FilesPairMatching, FilesScrumBoard} from "../model/state";
import {filesDragAndDrop} from "./filesDragAndDrop";

const getFiles = (): Files => {
    const emptyArray: Files = [];
    const aber: FilesScrumBoard[] = filesScrumBoard;
    const abee: FilesPairMatching[] = filesPairMatching;
    const abewe: FilesDragAndDrop[] = filesDragAndDrop;
    const ewer: FilesMemoryGame[] = filesMemoryGame;

    // @ts-ignore
    const allFiles: Files = emptyArray.concat(aber).concat(abee).concat(abewe).concat(ewer);
    return allFiles
}

export const files = getFiles();