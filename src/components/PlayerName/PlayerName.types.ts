import {Contact} from "../../model/state";

export interface PlayerNameProps extends PlayerNameOwnProps,
    Pick<PlayerNameStateProps,  "isPlayerNameVisible" | "isPlayerNameInputVisible" | "playerName"> {
    dispatchInitializeVisit: () => void
}

export interface PlayerNameOwnProps {

}

export interface PlayerNameStateProps {
    playerName: string,
    isPlayerNameVisible: boolean,
    isPlayerNameInputVisible: boolean,
    guests: Contact[],
}

export interface PlayerNameDispatchProps {
    dispatchInitializeVisit: (playerName: string, guests: Contact[]) => void
}