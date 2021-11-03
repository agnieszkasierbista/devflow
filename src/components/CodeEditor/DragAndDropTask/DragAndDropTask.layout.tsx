import React from "react"
import * as R from 'ramda';
import {DragAndDropTaskProps} from "./DragAndDropTask.types";
import {StyledDraggable, StyledInfoBox} from "./DragAndDropTask.styled";
import {FileDragAndDrop} from "../../../model/state";
import {batch} from "react-redux";


const checkOrder = (files: FileDragAndDrop,
                    hideCheckResults: () => void,
                    givePoints: () => void,
                    clearBoardAndAddToFinished: (gameName: string) => void,
                    gameName: string,) => {

    const correctOrder = files.items;
    const currentOrder = files.shuffledItems;

    function finishTheGame() {
        return batch(() => {
            hideCheckResults()
            //TODO: trzeba dodac gre do skonczonych i zakonczyc
            givePoints()
            clearBoardAndAddToFinished(gameName)
        })
    }


    return R.equals(correctOrder, currentOrder)
        ? <StyledInfoBox id="evaluation-result">
            <span>Correct! You won!</span>
            <button
                onClick={() => finishTheGame()}
            >
                OK
            </button>
        </StyledInfoBox>
        : <StyledInfoBox id="evaluation-result">
            <span>Wrong! Keep going!</span>
            <button>
                Try again!
            </button>
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
                                style={{backgroundColor: props.currentFilePuzzle.colors[val]}}

                                onDragStart={() => props.dispatchOnDragStartFiles(idx)}
                                onDrop={() => {
                                    const draggedItemIdx = props.currentFilePuzzle.beingDragged;
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
                {props.currentFilePuzzle.shouldShowOrderCheckResult && checkOrder(
                    props.currentFilePuzzle,
                    props.dispatchHideOrderCheckResult,
                    props.dispatchGivePoints,
                    props.dispatchClearDragAndDropBoardAndAddGameNameToFinished,
                    props.currentFilePuzzle.fileName)}
                <div>
                    Moves: {props.clicksCounterDragAndDrop}
                </div>

            </div>
        </div>
    );
};
//TODO: a może lepiej zmienić na takie clear board jak w Memory game?