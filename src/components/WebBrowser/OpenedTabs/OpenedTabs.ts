import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState, WebBrowserPaths} from "../../../model/state";
import { OpenedTabs } from "./OpenedTabs.layout";
import {OpenedTabsDispatchProps, OpenedTabsStateProps} from "./OpenedTabs.types";

export function mapStateToProps(state: AppState<WebBrowserPaths>): OpenedTabsStateProps {
    return {
        files: state.computerScreen.files,
        codeEditorTabsList: state.computerScreen.codeEditorTabsList,
        currentFileScrumBoard: state.computerScreen.currentFileScrumBoard,
        currentFileMemoryGame: state.computerScreen.currentFileMemoryGame,
        currentFilePuzzle: state.computerScreen.currentFilePuzzle,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): OpenedTabsDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenedTabs);