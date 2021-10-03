import {MemoryGameProps} from "./MemoryGame.types";
import React from "react";
import {
    StyledGameControls,
    StyledInfoBox,
    StyledMemoryGameBoard,
    StyledMemoryGameCardBack,
    StyledMemoryGameCardFront,
    StyledMovesCounter,
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

            {props.memoryGameCardToggleState?.length
                ?
                props.memoryGameCardToggleState.map((card) => {
                    return card.isLocked
                }).includes(false)
                    ?
                    null
                    :
                    <StyledInfoBox>
                        <br/>
                        Congrats!
                        <br/>
                        You won!
                        <br/>
                        <StyledResetButton
                            onClick={() => props.dispatchClearMemoryGameBoardAndAddGameNameToFinished(props.currentFileMemoryGame.fileName)}
                        >
                            OK
                        </StyledResetButton>
                    </StyledInfoBox>
                :
                null
            }

            <StyledMemoryGameBoard
                currentFileMemoryGameItems={props.currentFileMemoryGame.items}
            >
                {props.currentFileMemoryGame.shuffledItems.map((item, idx) => {

                    const isLocked: boolean = !!props.memoryGameCardToggleState?.find((card) => card.content === item && card.toggleState === true && card.idx !== idx);

                    return (
                        props.memoryGameCardToggleState?.length
                            ?
                            props.memoryGameCardToggleState[idx].toggleState === false
                                ?
                                props.memoryGameCardToggleState.filter((card) => {
                                    if (card.toggleState === true && card.isLocked === false) {
                                        return card
                                    }
                                }).length === 2
                                    ?
                                    <StyledMemoryGameCardFront
                                        key={idx}
                                    >
                                        O
                                    </StyledMemoryGameCardFront>
                                    :
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
                >
                    {props.memoryGameCardToggleState?.length
                        ? "Reset"
                        : "Start Game"
                    }
                </StyledResetButton>
            </StyledGameControls>
        </>
    )
}