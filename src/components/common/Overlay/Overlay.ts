import {connect} from 'react-redux';
import {Overlay} from "./Overlay.layout";
import {AppState} from '../../../model/state';
import {StateProps} from "./Overlay.types";

function mapStateToProps(state: AppState): StateProps {
    return {
        isOverlayVisible: state.workspace.isOverlayVisible
    }
}

export default connect(mapStateToProps)(Overlay);