export interface AppState {
    workspace: Workspace,
    computerScreen: ComputerScreen,
    guestSlot: GuestSlot
}

export interface Workspace {
    isOverlayVisible: boolean,
    playersName: string,
    isPlayerNameInputVisible: boolean
}

export interface ComputerScreen {

}

export interface GuestSlot {

}