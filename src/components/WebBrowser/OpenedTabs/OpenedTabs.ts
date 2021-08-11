import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import { OpenedTabs } from "./OpenedTabs.layout";
import {OpenedTabsDispatchProps, OpenedTabsStateProps} from "./OpenedTabs.types";

export function mapStateToProps(state: AppState): OpenedTabsStateProps {
    return {
        files: state.computerScreen.files,
        codeEditorTabsList: state.computerScreen.codeEditorTabsList,
        currentFile: state.computerScreen.currentFile,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): OpenedTabsDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedTabs);