import {connect} from "react-redux";
import {Dispatch} from "redux";
import { AppState } from "../../model/state";
import {TabBarDispatchProps, TabBarStateProps } from "../CodeEditor/TabBar/TabBar.types";
import {setCurrentFile} from "../../actions";
import { TabBar } from "../CodeEditor/TabBar/TabBar.layout";



export function mapStateToProps(state: AppState): TabBarStateProps {
    return {
        codeEditorTabsList: state.computerScreen.codeEditorTabsList,
        webBrowserTabsList: state.computerScreen.webBrowserTabsList
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