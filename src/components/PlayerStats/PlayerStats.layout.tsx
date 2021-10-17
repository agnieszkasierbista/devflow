import PlayerName from "../PlayerName/PlayerName";
import {StyledPlayerStats} from "./PlayerStats.styled";
import {PlayerStatsProps} from "./PlayerStats.types";

export const PlayerStats: React.FC<PlayerStatsProps> = (props) => {

    return (
        props.isPlayerNameVisible
            ? (
                <StyledPlayerStats>
                    <PlayerName/>
                    <span>
                        Points: 0
                        Time played: 0
                    </span>

                </StyledPlayerStats>
            )
            : null
    )
}