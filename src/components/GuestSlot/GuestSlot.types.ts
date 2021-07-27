import {Contact} from "../../model/state";

export interface GuestSlotProps extends GuestSlotOwnProps,
    GuestSlotDispatchProps,
    GuestSlotStateProps {
}

export interface GuestSlotOwnProps {

}

export interface GuestSlotStateProps {
    guests: Contact[],
}

export interface GuestSlotDispatchProps {
    dispatchInitializeVisit: (guests: Contact[]) => void
}