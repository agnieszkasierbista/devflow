import {connect} from 'react-redux';
import {Overlay} from "./Overlay.layout";
import {AppState} from '../../../model/state';
import {OverlayStateProps} from "./Overlay.types";

function mapStateToProps(state: AppState): OverlayStateProps {
    return {
        isOverlayVisible: state.workspace.isOverlayVisible
    }
}

export default connect(mapStateToProps)(Overlay);