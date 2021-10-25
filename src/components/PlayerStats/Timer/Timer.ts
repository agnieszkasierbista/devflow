import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {updateTimer} from "../../../actions";
import {TimerDispatchProps, TimerStateProps} from "./Timert.types";
import {Timer} from "./Timer.layout";
import { connect } from "react-redux";


export function mapStateToProps(state: AppState): TimerStateProps {
    return {
        timer: state.workspace.timer,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): TimerDispatchProps {
    return {
        dispatchUpdateTimer: function () {
            dispatch(updateTimer())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)