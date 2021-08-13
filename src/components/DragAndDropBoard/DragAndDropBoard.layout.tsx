import React from "react"
import * as R from 'ramda';
import {DragAndDropBoardProps} from "./DragAndDrop.types";
import {Puzzle} from "../../model/state";
import {StyledDraggable} from "./DragAndDropBoard.styled";


const checkOrder = (puzzle: Puzzle) => {
    const correctOrder = puzzle.items;
    const currentOrder = puzzle.shuffledItems;

    return R.equals(correctOrder, currentOrder)
        ? <div id="evaluation-result">Correct</div>
        : <div id="evaluation-result">Wrong!</div>;
};

export const DragAndDropBoard: React.FC<DragAndDropBoardProps> = (props) => {

    React.useEffect(() => {
        props.dispatchShuffleColors()
    }, [])

    return (
        <div id="puzzle">
            {props.puzzle.shuffledItems.map((val, idx) => {

                return (
                    <StyledDraggable
                        draggable="true"
                        key={idx}

                        style={{backgroundColor: props.puzzle.colors[val]}}

                        onDragStart={() => props.dispatchOnDragStart(idx)}
                        onDrop={() => {
                            const draggedItemIdx = props.puzzle.beingDragged;
                            const swappedItems = R.move(draggedItemIdx, idx, props.puzzle.shuffledItems);

                            props.dispatchOnDrop(swappedItems);
                        }}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                    >
                        {val}
                    </StyledDraggable>
                );
            })}
            <div id="puzzle-evaluation">
                <button
                    onClick={props.dispatchShowOrderCheckResult}
                    id="checker">CHECK
                </button>
                {props.puzzle.shouldShowOrderCheckResult && checkOrder(props.puzzle)}
            </div>
        </div>
    );
};
