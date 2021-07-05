import React from "react"
import * as R from 'ramda';
import {DragAndDropBoardProps} from "./DragAndDrop.types";
import { Puzzle } from "../../model/state";


const checkOrder = (puzzle: Puzzle) => {
    const correctOrder = puzzle.items;
    const currentOrder = puzzle.shuffledItems;

    return R.equals(correctOrder, currentOrder)
        ? <div id="evaluation-result">Correct</div>
        : <div id="evaluation-result">Wrong!</div>;
};

export const DragAndDropBoard: React.FC<DragAndDropBoardProps> = (props) => {
    return (
        <div id="puzzle">
            {props.puzzle.shuffledItems.map((val, idx) => {
                return (
                    <div
                        draggable="true"
                        key={idx}
                        style={{
                            border: '1px solid blue',
                            display: 'inline-block',
                            margin: 4,
                            minWidth: 20,
                            textAlign: 'center',
                        }}
                        onDragStart={() => props.dispatchOnDragStart(idx)}
                        onDrop={() => {
                            const draggedItemIdx = props.puzzle.beingDragged;
                            const swappedItems = R.move(draggedItemIdx, idx, props.puzzle.shuffledItems);

                            props.dispatchOnDrop(swappedItems);
                        }}
                        onDragOver={(e) => { e.preventDefault(); }}
                    >
                        {val}
                    </div>
                );
            })}
            <div id="puzzle-evaluation">
                <button
                    onClick={props.dispatchShowOrderCheckResult}
                    id="checker" >CHECK</button>
                {props.puzzle.shouldShowOrderCheckResult && checkOrder(props.puzzle)}
            </div>
        </div>
    );
};