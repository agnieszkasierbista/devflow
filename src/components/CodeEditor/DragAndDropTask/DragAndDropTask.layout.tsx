import React from "react"
import * as R from 'ramda';
import {DragAndDropTaskProps} from "./DragAndDropTask.types";
import {StyledDraggable} from "./DragAndDropTask.styled";
import {Files} from "../../../model/state";


const checkOrder = (files: Files) => {
    const correctOrder = files.items;
    const currentOrder = files.shuffledItems;

    return R.equals(correctOrder, currentOrder)
        ? <div id="evaluation-result">Correct</div>
        : <div id="evaluation-result">Wrong!</div>;
};

export const DragAndDropTask: React.FC<DragAndDropTaskProps> = (props) => {

    React.useEffect(() => {
        props.dispatchShuffleColorsFiles()
    }, [])

    return (
        <div id="task">
            {// @ts-ignore
                props.currentFile.shuffledItems
                    ?.map((val, idx) => {
                        // @ts-ignore
                        return (
                            <StyledDraggable
                                draggable="true"
                                key={idx}
                                // @ts-ignore
                                style={{backgroundColor: props.currentFile.colors[val]}}

                                onDragStart={() => props.dispatchOnDragStartFiles(idx)}
                                onDrop={() => {
                                    const draggedItemIdx = props.currentFile.beingDragged;
                                    // @ts-ignore
                                    const swappedItems = R.move(draggedItemIdx, idx, props.currentFile.shuffledItems);

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
                {props.currentFile.shouldShowOrderCheckResult && checkOrder(props.currentFile)}
            </div>
        </div>
    );
};
