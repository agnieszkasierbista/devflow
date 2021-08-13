import {Files} from "../../../../model/state";

export interface ScrumBoardItemsProps extends ScrumBoardItemsStateProps,
    ScrumBoardItemsDispatchProps, ScrumBoardItemsOwnProps {

}

export interface ScrumBoardItemsStateProps {
    currentFile: Files
}

export interface ScrumBoardItemsDispatchProps {
    dispatchOnDragCardStart: (itemId: number) => void,
    dispatchOnCardDrop: (swappedItems: string[], rowIdx: number) => void,
}

export interface ScrumBoardItemsOwnProps {
    item: string | string[],
    idx: number,
    rowIdx: number,

}