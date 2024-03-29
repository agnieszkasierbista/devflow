import {StyledScrumBoardCard} from "./ScrumBoardItem.styled"
import {ScrumBoardItemsProps} from "./ScrumBoardItem.types";
import React from "react";
import * as R from "ramda";

export const ScrumBoardItem: React.FC<ScrumBoardItemsProps> = (props) => {
    return (
        <StyledScrumBoardCard
            draggable="true"
            key={props.idx}
            item={props.item}

            onDragStart={() => props.dispatchOnDragCardStart(props.idx)}
            onDrop={() => {
                const draggedItemIdx = props.currentFileScrumBoard.beingDragged;
                const swappedItems = R.move(draggedItemIdx, props.idx, props.currentFileScrumBoard.shuffledItemsArray[props.rowIdx]);

                props.dispatchOnCardDrop(swappedItems, props.rowIdx);
            }}
            onDragOver={(e) => {
                e.preventDefault();
            }}
        >
            {props.item}
        </StyledScrumBoardCard>
    )
}