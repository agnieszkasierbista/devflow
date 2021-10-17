import {Contact} from "../../model/state";

export interface GuestSlotProps extends GuestSlotOwnProps,
    Pick<GuestSlotStateProps, "playerName"> {
    dispatchInitializeVisit: () => void
}

export interface GuestSlotOwnProps {

}

export interface GuestSlotStateProps {
    guests: Contact[],
    playerName: string
}

export interface GuestSlotDispatchProps {
    dispatchInitializeVisit: (playerName: string, guests: Contact[]) => void
}