import React from "react"
import * as R from 'ramda';
import {DragAndDropTaskProps} from "./DragAndDropTask.types";
import {StyledDraggable, StyledInfoBox} from "./DragAndDropTask.styled";
import {FileDragAndDrop} from "../../../model/state";


const checkOrder = (files: FileDragAndDrop, a: () => void) => {
    const correctOrder = files.items;
    const currentOrder = files.shuffledItems;

    const ButtonDragAndDrop = () => {
        return (
            <button
                onClick={a}
            >
                OK
            </button>
        )
    }


    return R.equals(correctOrder, currentOrder)
        ? <StyledInfoBox id="evaluation-result">
            <span>Correct! You won!</span>
            <ButtonDragAndDrop/>
        </StyledInfoBox>
        : <StyledInfoBox id="evaluation-result">
            <span>Wrong! Keep going!</span>
            <ButtonDragAndDrop/>
        </StyledInfoBox>;
};


export const DragAndDropTask: React.FC<DragAndDropTaskProps> = (props) => {

    React.useEffect(() => {
        props.dispatchShuffleColorsDragAndDrop()
    }, [])


    return (
        <div id="task">
            {
                props.currentFilePuzzle.shuffledItems
                    ?.map((val, idx) => {

                        return (
                            <StyledDraggable
                                draggable="true"
                                key={idx}
                                // @ts-ignore
                                style={{backgroundColor: props.currentFilePuzzle.colors[val]}}

                                onDragStart={() => props.dispatchOnDragStartFiles(idx)}
                                onDrop={() => {
                                    const draggedItemIdx = props.currentFilePuzzle.beingDragged;
                                    // @ts-ignore
                                    const swappedItems = R.move(draggedItemIdx, idx, props.currentFilePuzzle.shuffledItems);

                                    props.dispatchOnDropFiles(swappedItems);
                                }}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                {val}
                            </StyledDraggable>
                        );
                    })
            }
            <div id="puzzle-evaluation">
                <button
                    onClick={props.dispatchShowOrderCheckResultFiles}
                    id="checker">CHECK
                </button>
                {props.currentFilePuzzle.shouldShowOrderCheckResult && checkOrder(props.currentFilePuzzle, props.dispatchHideOrderCheckResult)}
            </div>
        </div>
    );
};
//TODO: a może lepiej zmienić na takie clear board jak w Memory game?