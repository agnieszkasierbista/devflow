import {filesMemoryGame} from "./filesMemoryGame";
import {filesScrumBoard} from "./filesScrumBoard";
import {filesPairMatching} from "./filesPairMatching";
import {File, FileDragAndDrop, FileMemoryGame, Files} from "../model/state";
import {filesDragAndDrop} from "./filesDragAndDrop";

const emptyArray: Array<FileDragAndDrop | FileMemoryGame> = [];

const getFiles = (): Files => {

    const array: Array<File> = []

    const allFiles: Array<File> = array.concat(filesScrumBoard).concat(filesPairMatching).concat(filesDragAndDrop).concat(filesMemoryGame);

    return allFiles
}

export const files = getFiles();

// export const filesWithoutScrumBoard: Array<FileMemoryGame> = emptyArray.concat(filesDragAndDrop).concat(filesMemoryGame);