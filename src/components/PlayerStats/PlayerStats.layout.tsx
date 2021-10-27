import PlayerName from "../PlayerName/PlayerName";
import {StyledPlayerStats} from "./PlayerStats.styled";
import {PlayerStatsProps} from "./PlayerStats.types";
import Timer from "./Timer/Timer";

export const PlayerStats: React.FC<PlayerStatsProps> = (props) => {

    return (
        props.isPlayerNameVisible
            ? (
                <StyledPlayerStats>
                    <PlayerName/>
                    <span>
                        Points: {props.points}
                    </span>
                    <Timer/>
                </StyledPlayerStats>
            )
            : null
    )
}