import {connect} from "react-redux";
import {AppState} from "../../model/state";
import {GuestSlotDispatchProps, GuestSlotProps, GuestSlotStateProps} from "./GuestSlot.types";
import {GuestSlot} from "./GuestSlot.layout";
import {Dispatch} from "redux";
import {initializeConversations} from "../../actions";

export function mapStateToProps(state: AppState): GuestSlotStateProps {
    return {
        contacts: state.guestSlot.contacts
    }
}

export function mapDispatchToProps(dispatch: Dispatch): GuestSlotDispatchProps {
    return {
        dispatchInitializeConversations: function (contacts) {
            dispatch(initializeConversations(contacts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestSlot);