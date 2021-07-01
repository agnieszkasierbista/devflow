import { connect } from "react-redux";
import {AppState} from "../../model/state";
import {PlayerName} from "./PlayerName.layout";
import {PlayerNameStateProps} from "./PlayerName.types";


function mapStateToProps(state: AppState): PlayerNameStateProps {
    return {
        playerName: state.workspace.playerName,
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        isPlayerNameVisible: state.workspace.isPlayerNameVisible,
    }
}

export default connect(mapStateToProps)(PlayerName)