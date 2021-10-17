import {connect} from "react-redux";
import {AppState} from "../../model/state";
import { PlayerStats } from "./PlayerStats.layout";
import { PlayerStatsStateProps } from "./PlayerStats.types";


function mapStateToProps(state: AppState): PlayerStatsStateProps {
    return {
        playerName: state.workspace.playerName,
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        isPlayerNameVisible: state.workspace.isPlayerNameVisible,
    }
}

export default connect(mapStateToProps)(PlayerStats)