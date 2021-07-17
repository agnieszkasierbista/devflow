import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {OpenedFiles} from "./OpenedFiles.layout";
import {OpenedFilesDispatchProps, OpenedFilesStateProps} from "./OpenedFiles.types";

export function mapStateToProps(state: AppState): OpenedFilesStateProps {
    return {
        openedFiles: state.computerScreen.openedFiles
    }
}

export function mapDispatchToProps(dispatch: Dispatch): OpenedFilesDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedFiles);