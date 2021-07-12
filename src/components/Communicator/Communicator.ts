import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {Communicator} from "./Communicator.layout";
import {CommunicatorDispatchProps, CommunicatorStateProps} from "./Communicator.types";


export function mapStateToProps(state: AppState): CommunicatorStateProps {
    return {}
}

export function mapDispatchToProps(dispatch: Dispatch): CommunicatorDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Communicator);