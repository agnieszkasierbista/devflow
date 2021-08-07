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
                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                onClick={() => {
                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        [CLICK_ON_LEFT]: props.dispatchClickOffLeft,
                                        [CLICK_OFF_LEFT]: props.dispatchClickOnLeft,

                                    }

                                    return onClickPairMatchingHandlers[props.clickedDivCurrentStateLeft]
                                        ? onClickPairMatchingHandlers[props.clickedDivCurrentStateLeft](val)
                                        : console.log(props.clickedDivCurrentStateLeft)
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
                        return (
                            <StyledClickable
                                key={idx}
                                id={val}
                                onClick={() => {
                                    const onClickPairMatchingHandlers: OnClickPairMatchingHandlers = {
                                        [CLICK_ON_RIGHT]: props.dispatchClickOffRight,
                                        [CLICK_OFF_RIGHT]: props.dispatchClickOnRight,

                                    }

                                    return onClickPairMatchingHandlers[props.clickedDivCurrentStateRight]
                                        ? onClickPairMatchingHandlers[props.clickedDivCurrentStateRight](val)
                                        : console.log(props.clickedDivCurrentStateRight)
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