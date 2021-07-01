export interface AppState {
    workspace: Workspace,
    computerScreen: ComputerScreen,
    guestSlot: GuestSlot
}

export interface Workspace {
    isOverlayVisible: boolean,
    playerName: string,
    isPlayerNameInputVisible: boolean,
    isPlayerNameVisible: boolean
}

export interface ComputerScreen {

}

export interface GuestSlot {

}

export interface WorkspaceHandlers {
    [key: string]: () => Workspace
}
