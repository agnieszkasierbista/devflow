import {PairMatchingProps} from "./PairMatching.types";
import React from "react";
import {StyledButton, StyledClickable, StyledColumn, StyledTask} from "./PairMatching.styled";
import {OnClickPairMatchingHandlers} from "../../../model/state";
import * as R from "ramda";

const checkOrder = (
    items: string[][],
    leftColumn: string[],
    rightColumn: string[],
    givePoints: () => void) => {


    const getValueOf0 = R.prop("0");
    const pairedItems = R.zip(leftColumn, rightColumn);
    const sortByFirstItem = R.sortBy(getValueOf0);
    const currentOrder = sortByFirstItem(pairedItems);
    const correctOrder = sortByFirstItem(items);

    return R.equals(correctOrder, currentOrder)
        ? <div id="evaluation-result">Correct! You won!
            <button
                onClick={givePoints}
            >
                OK!
            </button>
        </div>
        : <div id="evaluation-result">Wrong! Try again!</div>;
};

export const PairMatching: React.FC<PairMatchingProps> = (props) => {

    React.useEffect(() => {
        props.dispatchShuffleAllItems(props.currentFilePairMatching.itemsArray)
    }, [])

    return (

        <StyledTask>

            <StyledColumn>
                {props.columnLeft.map((val, idx) => {

                        const handlerName = props.isDivClicked.find((div) => Object.keys(div)[0] === val)?.[val];
                        const divColor = props.randomColors[idx];

                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                style={
                                    handlerName
                                        ? {backgroundColor: divColor}
                                        : {backgroundColor: "white"}
                                }
                                onClick={() => {
                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        true: props.dispatchClickOffLeft,
                                        false: props.dispatchClickOnLeft,
                                    }


                                    if (onClickPairMatchingHandlers[`${handlerName}`]) {
                                        onClickPairMatchingHandlers[`${handlerName}`](val, divColor)
                                    }
                                }}
                            >
                                {val}
                            </StyledClickable>
                        )
                    }
                )
                }

            </StyledColumn>

            <StyledColumn>
                {
                    props.columnRight.map((val, idx) => {

                        const handlerName = props.isDivClicked.find((div) => Object.keys(div)[0] === val)?.[val];
                        const divColor = Object.values(props.currentFilePairMatching.colors)[0];

                        const rightColumnIndex = props.columnRight.findIndex((item) => item === val)
                        const currentDivColor = (props.currentDivColor[rightColumnIndex] !== ""
                            ?
                            props.currentDivColor[rightColumnIndex]
                            :
                            divColor)
                        ;

                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                style={
                                    props.currentDivColor
                                        ?
                                        handlerName
                                            ? {backgroundColor: currentDivColor}
                                            : {backgroundColor: "white"}
                                        :
                                        {backgroundColor: divColor}
                                }
                                onClick={() => {

                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        true: props.dispatchClickOffRight,
                                        false: props.dispatchClickOnRight,
                                    }


                                    if (onClickPairMatchingHandlers[`${handlerName}`]) {
                                        onClickPairMatchingHandlers[`${handlerName}`](val, divColor, rightColumnIndex)
                                    }
                                }}
                            >
                                {val}
                            </StyledClickable>
                        )
                    })
                }
            </StyledColumn>
            <div>
                <StyledButton
                    onClick={() => props.dispatchStartCountingGameTime()}
                >
                    {props.pairMatchingStartTime >= 1
                        ? props.currentFilePairMatching.shouldShowOrderCheckResult ? "Restart" : "Reset"
                        : "Start Game"
                    }
                </StyledButton>
                <StyledButton
                    key="pair-matching-checker"
                    onClick={() => props.dispatchCheckMatchedPairs()}

                >
                    Check
                </StyledButton>
                {
                    props.currentFilePairMatching.shouldShowOrderCheckResult
                    && checkOrder(
                        props.currentFilePairMatching.itemsArray,
                        props.columnLeftClicked,
                        props.columnRightClicked,
                        props.dispatchGivePoints
                    )
                }
            </div>
        </StyledTask>
    )
}