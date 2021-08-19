import {filesMemoryGame} from "./filesMemoryGame";
import {filesScrumBoard} from "./filesScrumBoard";
import {filesPairMatching} from "./filesPairMatching";
import {Files, FilesDragAndDrop, FilesMemoryGame, FilesPairMatching, FilesScrumBoard} from "../model/state";
import {filesDragAndDrop} from "./filesDragAndDrop";


// const filez: Array<FilesMemoryGame | FilesScrumBoard> = [];
//
// // export const files: Files = [filesMemoryGame, filesScrumBoard, filesPairMatching, filesDragAndDrop];
//

//
// const abc: Array<FilesMemoryGame | FilesScrumBoard> = filez.concat(filesMemoryGame).concat(filesScrumBoard);


const getFiles = (): Files => {
    const emptyArray: Files = [];
    const aber: FilesScrumBoard[] = filesScrumBoard;
    const abee: FilesPairMatching[] = filesPairMatching;
    const abewe: FilesDragAndDrop[] = filesDragAndDrop;
    const ewer: FilesMemoryGame[] = filesMemoryGame;
    const allFiles: Files = emptyArray.concat(aber).concat(abee).concat(abewe).concat(ewer);
    return allFiles
}


export const files = getFiles();