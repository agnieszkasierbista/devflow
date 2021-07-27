import {connect} from "react-redux";
import {Dispatch} from "redux";
import {delayWork, endVisit, ready, reject, startWork} from "../../actions";
import {AppState} from "../../model/state";
import {VisitDispatchProps, VisitStateProps} from "../common/Visit/Visit.types";
import {Visit} from "../common/Visit/Visit.layout";


export function mapStateToProps(state: AppState): VisitStateProps {
    return {
        visits: state.guestSlot.visits,
        currentVisitPhase: state.guestSlot.currentVisitPhase,
        currentVisitHistory: state.guestSlot.currentVisitHistory,
        currentGuest: state.guestSlot.currentGuest,
        visitsHistory: state.guestSlot.visitsHistory,
        currentEvent: state.guestSlot.currentEvent,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): VisitDispatchProps {
    return {
        dispatchEndVisit: function (event) {
            dispatch(endVisit(event))
        },
        dispatchReady: function (event) {
            dispatch(ready(event))
        },
        dispatchReject: function (event) {
            dispatch(reject(event))
        },
        dispatchStartWork: function (event) {
            dispatch(startWork(event))
        },
        dispatchDelayWork: function (event) {
            dispatch(delayWork(event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visit);