import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {Communicator} from "./Communicator.layout";


export function mapStateToProps(state: AppState) {
    return {

    }
}

export function mapDispatchToProps(dispatch: Dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Communicator);