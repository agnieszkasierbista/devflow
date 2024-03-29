import {FileDragAndDrop, Files} from "../../../model/state";
import {clearDragAndDropBoardAndAddGameNameToFinished} from "../../../actions";

export interface DragAndDropTaskProps extends DragAndDropTaskOwnProps,
    DragAndDropTaskStateProps,
    DragAndDropTaskDispatchProps {
}

export interface DragAndDropTaskOwnProps {
}

export interface DragAndDropTaskStateProps {
    files: Files,
    randomColors: string[],
    currentFilePuzzle: FileDragAndDrop,
    clicksCounterDragAndDrop: number,
}

export interface DragAndDropTaskDispatchProps {
    dispatchOnDragStartFiles: (idx: number) => void,
    dispatchOnDropFiles: (swappedItems: string[]) => void,
    dispatchShowOrderCheckResultFiles: () => void,
    dispatchShuffleColorsDragAndDrop: () => void,
    dispatchHideOrderCheckResult: () => void,
    dispatchGivePoints: () => void,
    dispatchClearDragAndDropBoardAndAddGameNameToFinished: (name: string) => void,
}