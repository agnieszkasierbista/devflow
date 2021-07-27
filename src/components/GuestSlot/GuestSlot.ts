import {connect} from "react-redux";
import {AppState} from "../../model/state";
import {GuestSlotDispatchProps, GuestSlotStateProps} from "./GuestSlot.types";
import {GuestSlot} from "./GuestSlot.layout";
import {Dispatch} from "redux";
import { initializeVisit } from "../../actions";

export function mapStateToProps(state: AppState): GuestSlotStateProps {
    return {
        guests: state.guestSlot.guests
    }
}

export function mapDispatchToProps(dispatch: Dispatch): GuestSlotDispatchProps {
    return {
        dispatchInitializeVisit: function (guests) {
            dispatch(initializeVisit(guests))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestSlot);