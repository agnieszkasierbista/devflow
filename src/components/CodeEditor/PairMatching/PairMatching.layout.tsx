import {PairMatchingProps} from "./PairMatching.types";
import React from "react";
import {StyledButton, StyledClickable, StyledColumn, StyledTask} from "./PairMatching.styled";
import {OnClickPairMatchingHandlers} from "../../../model/state";
import {CLICK_OFF_LEFT, CLICK_OFF_RIGHT, CLICK_ON_LEFT, CLICK_ON_RIGHT} from "../../../actions";

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

                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                style={
                                    handlerName
                                        ? {backgroundColor: props.randomColors[idx]}
                                        : {backgroundColor: "white"}
                                }
                                onClick={() => {
                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        true: props.dispatchClickOffLeft,
                                        false: props.dispatchClickOnLeft,
                                    }


                                    if (onClickPairMatchingHandlers[`${handlerName}`]) {
                                        onClickPairMatchingHandlers[`${handlerName}`](val)
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

                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                // styled={}
                                // jak przekazać kolor?
                                onClick={() => {
                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        true: props.dispatchClickOffRight,
                                        false: props.dispatchClickOnRight,
                                    }


                                    if (onClickPairMatchingHandlers[`${handlerName}`]) {
                                        onClickPairMatchingHandlers[`${handlerName}`](val)
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