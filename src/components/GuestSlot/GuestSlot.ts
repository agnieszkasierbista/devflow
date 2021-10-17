import {connect, MergeProps} from "react-redux";
import {AppState} from "../../model/state";
import {GuestSlotDispatchProps, GuestSlotProps, GuestSlotStateProps} from "./GuestSlot.types";
import {GuestSlot} from "./GuestSlot.layout";
import {Dispatch} from "redux";
import {initializeVisit} from "../../actions";

export function mapStateToProps(state: AppState): GuestSlotStateProps {
    return {
        guests: state.guestSlot.guests,
        playerName: state.workspace.playerName
    }
}

export function mapDispatchToProps(dispatch: Dispatch): GuestSlotDispatchProps {
    return {
        dispatchInitializeVisit: function (playerName, guests) {
            dispatch(initializeVisit(playerName, guests))
        }
    }
}

const merge = function (guestSlotStateProps: GuestSlotStateProps,
                        guestSlotDispatchProps: GuestSlotDispatchProps,
                        ownProps: {}): GuestSlotProps {
    return {
        playerName: guestSlotStateProps.playerName,
        dispatchInitializeVisit: () => {
            guestSlotDispatchProps.dispatchInitializeVisit(guestSlotStateProps.playerName, guestSlotStateProps.guests)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    merge
)(GuestSlot);