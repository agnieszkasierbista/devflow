import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState, CodeEditorPaths} from "../../../model/state";
import {OpenedFiles} from "./OpenedFiles.layout";
import {OpenedFilesDispatchProps, OpenedFilesStateProps} from "./OpenedFiles.types";

export function mapStateToProps(state: AppState<CodeEditorPaths>): OpenedFilesStateProps {
    return {
        files: state.computerScreen.files,
        codeEditorTabsList: state.computerScreen.codeEditorTabsList,
        currentFilePuzzle: state.computerScreen.currentFilePuzzle,
        currentFilePairMatching: state.computerScreen.currentFilePairMatching,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): OpenedFilesDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedFiles);