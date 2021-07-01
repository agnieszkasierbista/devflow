import {connect} from "react-redux";
import {Workspace} from "./Workspace.layout";
import {AppState} from "../../model/state";
import {WorkspaceStateProps} from "./Workspace.types";


function mapStateToProps(state: AppState): WorkspaceStateProps {
    return {}
}

export default connect(mapStateToProps)(Workspace);