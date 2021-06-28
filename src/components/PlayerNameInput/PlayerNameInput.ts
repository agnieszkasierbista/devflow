import {connect} from 'react-redux';
import { PlayerNameInput } from './PlayerNameInput.layout';
import {AppState} from "../../model/state";


function mapStateToProps(state: AppState) {
    return {
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
    }
}

export default connect(mapStateToProps)(PlayerNameInput);