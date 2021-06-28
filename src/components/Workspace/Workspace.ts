import { connect } from "react-redux";
import {Workspace} from "./Workspace.layout";
import {AppState} from "../../model/state";


function mapStateToProps(state: AppState) {
    return {}
}

export default connect(mapStateToProps)(Workspace);