import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {OpenedFiles} from "./OpenedFiles.layout";

export function mapStateToProps(state: AppState) {
    return {
        openedFiles: state.computerScreen.openedFiles
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedFiles);