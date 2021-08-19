import {MemoryGameProps} from "./MemoryGame.types";
import React from "react";
import {StyledMemoryGameBoard, StyledMemoryGameCardBack, StyledMemoryGameCardFront} from "./MemoryGame.styled";
import * as R from "ramda";

export const MemoryGame: React.FC<MemoryGameProps> = (props) => {
    return (
        <StyledMemoryGameBoard>
            {props.currentFileMemoryGame.items.map((item, idx) => {

                return (
                    props.memoryGameCardToggleState
                        ?
                        // @ts-ignore
                        R.equals(props.memoryGameCardToggleState[idx], {[idx]: false})
                            ?
                            <StyledMemoryGameCardFront
                                key={idx}
                                onClick={() => props.dispatchToggleCard(idx, item)}
                            >
                                O
                            </StyledMemoryGameCardFront>
                            :
                            <StyledMemoryGameCardBack
                                key={idx}
                                onClick={() => props.dispatchToggleCard(idx, item)}
                            >
                                {item}
                            </StyledMemoryGameCardBack>
                        :
                        null
                )

            })}
        </StyledMemoryGameBoard>
    )
}