import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {TabBar} from "./TabBar.layout";
import {TabBarDispatchProps, TabBarStateProps} from "./TabBar.types";


export function mapStateToProps(state: AppState): TabBarStateProps {
    return {
        codeEditorTabsList: state.computerScreen.codeEditorTabsList
    }
}

export function mapDispatchToProps(dispatch: Dispatch): TabBarDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);