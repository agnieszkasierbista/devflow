import { connect } from "react-redux";
import { Dispatch } from "redux";
import {AppState} from "../../model/state";
import {CodeEditor} from "./CodeEditor.layout";


export function mapStateToProps(state: AppState) {
    return {
    codeEditorTabsList: state.computerScreen.codeEditorTabsList,
    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CodeEditor);