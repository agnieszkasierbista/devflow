import {PlayerNameProps} from "./PlayerName.types";
import {StyledPlayerName} from "./PlayerName.styled";


export const PlayerName: React.FC<PlayerNameProps> = (props) => {

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