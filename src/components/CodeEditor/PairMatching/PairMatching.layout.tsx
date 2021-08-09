import {PairMatchingProps} from "./PairMatching.types";
import React from "react";
import {StyledButton, StyledClickable, StyledColumn, StyledTask} from "./PairMatching.styled";
import {OnClickPairMatchingHandlers} from "../../../model/state";

export const PairMatching: React.FC<PairMatchingProps> = (props) => {

    React.useEffect(() => {
        // @ts-ignore
        props.dispatchShuffleAllItems(props.currentFile.items)
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
                        const divColor = Object.values(props.currentFile.colors)[0];

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

                                    console.log("onClick", rightColumnIndex);
                                    console.log("currdivColor",currentDivColor);
                                    console.log("props.currentDivColor", props.currentDivColor);

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

            <StyledButton>
                Check
            </StyledButton>

        </StyledTask>
    )
}