import {Puzzle} from "../../model/state";

export interface DragAndDropBoardProps extends DragAndDropBoardOwnProps,
    DragAndDropBoardStateProps,
    DragAndDropBoardDispatchProps {
}

export interface DragAndDropBoardOwnProps {

}

export interface DragAndDropBoardStateProps {
    puzzle: Puzzle,
}

export interface DragAndDropBoardDispatchProps {
    dispatchOnDragStart: (idx: number) => void,
    dispatchOnDrop: (swappedItems: string[]) => void,
    dispatchShowOrderCheckResult: () => void
}