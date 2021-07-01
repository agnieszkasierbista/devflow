import {connect} from 'react-redux';
import {PlayerNameInput} from './PlayerNameInput.layout';
import {AppState} from "../../model/state";
import {changePlayerName, closePlayerNameInput} from '../../actions';
import { Dispatch } from 'redux';
import {PlayerNameInputDispatchProps, PlayerNameInputStateProps} from "./PlayerNameInput.types";


function mapStateToProps(state: AppState): PlayerNameInputStateProps {
    return {
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        playerName: state.workspace.playerName
    }
}

function mapDispatchToProps(dispatch: Dispatch): PlayerNameInputDispatchProps {
    return {
        dispatchChangePlayerName: function (name) {
            dispatch(changePlayerName(name))
        },
        dispatchClosePlayerNameInput: function () {
            dispatch(closePlayerNameInput())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNameInput);