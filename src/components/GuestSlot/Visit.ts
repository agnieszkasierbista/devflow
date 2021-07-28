import {connect} from "react-redux";
import {Dispatch} from "redux";
import {delayWorkVisit, endVisit, readyVisit, rejectVisit, startWorkVisit} from "../../actions";
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
        dispatchReadyVisit: function (event) {
            dispatch(readyVisit(event))
        },
        dispatchRejectVisit: function (event) {
            dispatch(rejectVisit(event))
        },
        dispatchStartWorkVisit: function (event) {
            dispatch(startWorkVisit(event))
        },
        dispatchDelayWorkVisit: function (event) {
            dispatch(delayWorkVisit(event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visit);