import {MemoryGameProps} from "./MemoryGame.types";
import React from "react";
import {
    StyledGameControls,
    StyledMemoryGameBoard,
    StyledMemoryGameCardBack,
    StyledMemoryGameCardFront, StyledMovesCounter,
    StyledResetButton
} from "./MemoryGame.styled";

export const MemoryGame: React.FC<MemoryGameProps> = (props) => {

    React.useEffect(() => {
        setTimeout(() => {
            props.dispatchSetToggleStateToFalse()
        }, 500)
    })

    return (
        <>
            <StyledMemoryGameBoard>
                {props.currentFileMemoryGame.items.map((item, idx) => {

                    const isLocked: boolean = !!props.memoryGameCardToggleState?.find((card) => card.content === item && card.toggleState === true && card.idx !== idx);

                    return (
                        props.memoryGameCardToggleState?.length
                            ?
                            props.memoryGameCardToggleState[idx].toggleState === false
                                ?
                                <StyledMemoryGameCardFront
                                    key={idx}
                                    onClick={() => props.dispatchToggleCard(idx, item, isLocked)}
                                >
                                    O
                                </StyledMemoryGameCardFront>
                                :
                                props.memoryGameCardToggleState?.find((card) => card.content === item && card.toggleState === true && card.idx !== idx)
                                    ?
                                    <StyledMemoryGameCardBack
                                        key={idx}
                                        isLocked={isLocked}
                                    >
                                        {item}
                                    </StyledMemoryGameCardBack>
                                    :

                                    <StyledMemoryGameCardBack
                                        key={idx}
                                        onClick={() => props.dispatchToggleCard(idx, item, isLocked)}
                                        isLocked={false}
                                    >
                                        {item}
                                    </StyledMemoryGameCardBack>
                            :
                            null
                    )

                })}

            </StyledMemoryGameBoard>
            <StyledGameControls>
                <StyledMovesCounter>
                    Moves: {props.clicksCounter}
                </StyledMovesCounter>
                <StyledResetButton
                    onClick={() => props.dispatchRestartGame()}
                >Reset
                </StyledResetButton>
            </StyledGameControls>
        </>
    )
}