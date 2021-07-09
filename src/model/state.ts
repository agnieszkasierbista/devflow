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

export interface Puzzle {
    items: string[];
    shuffledItems: string[];
    colors: {[key: string]: string};
    beingDragged: number;
    shouldShowOrderCheckResult: boolean;
}

export interface ComputerScreen {
    randomColors: string[],
    puzzle: Puzzle,
    codeEditorTabsList: string[],
}

export interface GuestSlot {

}

export interface WorkspaceHandlers {
    [key: string]: () => Workspace
}
export interface ComputerScreenHandlers {
    [key: string]: () => ComputerScreen
}
