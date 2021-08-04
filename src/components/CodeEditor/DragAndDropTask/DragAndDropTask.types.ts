import {FileName, Files} from "../../../model/state";

export interface DragAndDropTaskProps extends DragAndDropTaskOwnProps,
    DragAndDropTaskStateProps,
    DragAndDropTaskDispatchProps {
}

export interface DragAndDropTaskOwnProps {
    fileName: FileName
}

export interface DragAndDropTaskStateProps {
    files: Files[],
    randomColors: string[],
    currentFile: Files
}

export interface DragAndDropTaskDispatchProps {
    dispatchOnDragStartFiles: (idx: number) => void,
    dispatchOnDropFiles: (swappedItems: string[]) => void,
    dispatchShowOrderCheckResultFiles: () => void,
    dispatchShuffleColorsFiles: () => void,
}