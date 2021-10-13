import {FileName, Files, FileDragAndDrop} from "../../../model/state";

export interface DragAndDropTaskProps extends DragAndDropTaskOwnProps,
    DragAndDropTaskStateProps,
    DragAndDropTaskDispatchProps {
}

export interface DragAndDropTaskOwnProps {
}

export interface DragAndDropTaskStateProps {
    files: Files,
    randomColors: string[],
    currentFilePuzzle: FileDragAndDrop
}

export interface DragAndDropTaskDispatchProps {
    dispatchOnDragStartFiles: (idx: number) => void,
    dispatchOnDropFiles: (swappedItems: string[]) => void,
    dispatchShowOrderCheckResultFiles: () => void,
    dispatchShuffleColorsDragAndDrop: () => void,
    dispatchHideOrderCheckResult: () => void,
}