import {FileDragAndDrop} from "../../model/state";

export interface DragAndDropBoardProps extends DragAndDropBoardOwnProps,
    DragAndDropBoardStateProps,
    DragAndDropBoardDispatchProps {
}

export interface DragAndDropBoardOwnProps {

}

export interface DragAndDropBoardStateProps {
    puzzle: FileDragAndDrop,
    randomColors: string[],
}

export interface DragAndDropBoardDispatchProps {
    dispatchOnDragStart: (idx: number) => void,
    dispatchOnDrop: (swappedItems: string[]) => void,
    dispatchShowOrderCheckResult: () => void,
    dispatchShuffleColors: () => void,
}