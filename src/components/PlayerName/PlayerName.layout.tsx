import { PlayerNameProps } from "./PlayerNameProps.types";
import {StyledPlayerName} from "./PlayerName.styled";



export const PlayerName: React.FC<PlayerNameProps> = (props) => {

    const {
        playerName
    } = props;


    return (
        props.isPlayerNameVisible
            ?
            (<StyledPlayerName>
                {playerName}
            </StyledPlayerName>)
            : null
    )
}