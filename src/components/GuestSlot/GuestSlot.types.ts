import {Contact} from "../../model/state";

export interface GuestSlotProps extends GuestSlotOwnProps,
    GuestSlotDispatchProps,
    GuestSlotStateProps {
}

export interface GuestSlotOwnProps {

}

export interface GuestSlotStateProps {
    contacts: Contact[],
}

export interface GuestSlotDispatchProps {
    dispatchInitializeConversations: (contacts: Contact[]) => void
}