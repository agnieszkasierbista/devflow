import {connect} from 'react-redux';
import {PlayerNameInput} from './PlayerNameInput.layout';
import {AppState} from "../../model/state";
import {changePlayerName, closePlayerNameInput} from '../../actions';


function mapStateToProps(state: AppState) {
    return {
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        playerName: state.workspace.playerName
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        dispatchChangePlayerName: function (name: string) {
            dispatch(changePlayerName(name))
        },
        dispatchClosePlayerNameInput: function () {
            dispatch(closePlayerNameInput())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerNameInput);