import {PairMatchingProps} from "./PairMatching.types";
import React from "react";
import {StyledButton, StyledClickable, StyledColumn, StyledTask} from "./PairMatching.styled";
import {OnClickPairMatchingHandlers} from "../../../model/state";
import * as R from "ramda";

const checkOrder = (
    items: string[][],
    leftColumn: string[],
    rightColumn: string[]) => {

    const pairedItems = R.zip(leftColumn, rightColumn);
    // @ts-ignore
    const sortByFirstItem = R.sortBy(R.prop(0));
    // @ts-ignore
    const currentOrder = sortByFirstItem(pairedItems);
    // @ts-ignore
    const correctOrder = sortByFirstItem(items);

    return R.equals(correctOrder, currentOrder)
        ? <div id="evaluation-result">Correct</div>
        : <div id="evaluation-result">Wrong!</div>;
};

export const PairMatching: React.FC<PairMatchingProps> = (props) => {

    React.useEffect(() => {
        // @ts-ignore
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
                        props.columnRightClicked
                    )
                }
            </div>
        </StyledTask>
    )
}