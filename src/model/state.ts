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
    event: string,
    npcName: string,
    npcDialogueOption: string,
    playerDialogueOptions: { rpl: string, event: string }[]
}

export type Contact = string

export type Conversation = Array<DialogueOption>

export interface Conversations {
    [key: string]: Conversation
}

export type FileName = string

export interface Files extends Puzzle {
    fileName: FileName,
}

export interface ComputerScreen {
    randomColors: string[],
    puzzle: Puzzle,
    currentFile: Files,
    files: Files[],
    codeEditorTabsList: string[],
    openedFiles: string[],
    contacts: string[],
    conversations: Conversations,
    currentConversationPhase: DialogueOption,
    currentContact: string,
    currentEvent: string,
    currentConversationHistory: string[],
    conversationsHistory: Conversations
}

export interface GuestSlot {
    randomColors: string[],
    guests: string[],
    visits: Conversations,
    currentVisitPhase: DialogueOption,
    currentGuest: string,
    currentEvent: string,
    currentVisitHistory: string[],
    visitsHistory: Conversations
}

export interface WorkspaceHandlers {
    [key: string]: () => Workspace
}

export interface ComputerScreenHandlers {
    [key: string]: () => ComputerScreen
}

export interface GuestSlotHandlers {
    [key: string]: () => GuestSlot
}

export interface OnClickHandlers {
    [key: string]: (event: string) => void
}
