import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {CodeEditor} from "./CodeEditor.layout";
import {CodeEditorDispatchProps, CodeEditorStateProps} from "./CodeEditor.types";


export function mapStateToProps(state: AppState): CodeEditorStateProps {
    return {}
}

export function mapDispatchToProps(dispatch: Dispatch): CodeEditorDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);