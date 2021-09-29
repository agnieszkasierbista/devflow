import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {TabBar} from "./TabBar.layout";
import {TabBarDispatchProps, TabBarStateProps} from "./TabBar.types";
import {setCurrentFile} from "../../../actions";


export function mapStateToProps(state: AppState): TabBarStateProps {
    return {
        files: state.computerScreen.files,
        codeEditorTabsList: state.computerScreen.codeEditorTabsList,
        webBrowserTabsList: state.computerScreen.webBrowserTabsList,
        finishedGameNames: state.computerScreen.finishedGameNames,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): TabBarDispatchProps {
    return {
        dispatchSetCurrentFile: function (fileName) {
            dispatch(setCurrentFile(fileName))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);