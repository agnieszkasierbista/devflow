import {connect} from "react-redux";
import {Dispatch} from "redux";
import {startVisit} from "../../actions";
import {AppState} from "../../model/state";
import {Guests} from "../common/Guests/Guests.layout";
import {GuestsDispatchProps, GuestsStateProps} from "../common/Guests/Guests.types";


function mapStateToProps(state: AppState): GuestsStateProps {
    return {
        guests: state.guestSlot.guests,
        visits: state.guestSlot.visits,
        currentVisitPhase: state.guestSlot.currentVisitPhase,
        visitsHistory: state.guestSlot.visitsHistory,
    }
}

function mapDispatchToProps(dispatch: Dispatch): GuestsDispatchProps {
    return {

        dispatchStartVisit: function (guest, event) {
            return dispatch(startVisit(guest, event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guests);