import { connect } from "react-redux";
import {AppState} from "../../model/state";
import {PlayerName} from "./PlayerName.layout";


function mapStateToProps(state: AppState) {
    return {
        playerName: state.workspace.playerName,
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        isPlayerNameVisible: state.workspace.isPlayerNameVisible,
    }
}

export default connect(mapStateToProps)(PlayerName)