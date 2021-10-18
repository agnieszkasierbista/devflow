import {PlayerNameProps} from "./PlayerName.types";
import {StyledPlayerName} from "./PlayerName.styled";
import React from "react";


export const PlayerName: React.FC<PlayerNameProps> = (props) => {

    React.useEffect(() => {
        props.dispatchInitializeVisit()
    }, [])

    return (
        props.isPlayerNameVisible
            ? (
                <StyledPlayerName>
                    {props.playerName}
                </StyledPlayerName>
            )
            : null
    )
}