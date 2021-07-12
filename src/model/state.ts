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
    colors: { [key: string]: string };
    beingDragged: number;
    shouldShowOrderCheckResult: boolean;
}

export interface DialogueOption {
    events: string,
    npcName: string,
    dialogueOption: string,
    player: { rpl: string, event: string }[]
}

export interface Conversation {
    [key: string]: DialogueOption
}

export interface Conversations {
    [key: string]: Conversation
}

export interface ComputerScreen {
    randomColors: string[],
    puzzle: Puzzle,
    codeEditorTabsList: string[],
    openedFiles: string[],
    contacts: string[],
    conversation: Conversation,
}

export interface GuestSlot {

}

export interface WorkspaceHandlers {
    [key: string]: () => Workspace
}

export interface ComputerScreenHandlers {
    [key: string]: () => ComputerScreen
}

export interface ConversationHandlers {
    [key: string]: () => ComputerScreen
}
