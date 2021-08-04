import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {TabBar} from "./TabBar.layout";
import {TabBarDispatchProps, TabBarStateProps} from "./TabBar.types";
import {setCurrentFile} from "../../../actions";


export function mapStateToProps(state: AppState): TabBarStateProps {
    return {
        codeEditorTabsList: state.computerScreen.codeEditorTabsList
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