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
export type TaskType = string

export interface FilesMemoryGame {
    fileName: FileName,
    taskType: TaskType,
    items: string[],
}

export interface FilesDragAndDrop {
    fileName: FileName,
    items: string[],
    shuffledItems: string[],
    colors: { [key: string]: string },
    beingDragged: number,
    shouldShowOrderCheckResult: boolean,
    taskType: TaskType,
}

export interface FilesPairMatching {
    fileName: FileName,
    items: string[][],
    colors: { [key: string]: string },
    beingDragged: number,
    shouldShowOrderCheckResult: boolean,
    taskType: TaskType,
}

export interface FilesScrumBoard {
    fileName: FileName,
    items: string[][],
    shuffledItems: string[][],
    beingDragged: number,
    taskType: TaskType,
}
// TODO: moze jakis tu typ trzebaby dac zamiast any
export type Files = any[]

export interface ComputerScreen {
    randomColors: string[],
    puzzle: FilesDragAndDrop,
    currentFilePuzzle: FilesDragAndDrop,
    currentFileScrumBoard: FilesScrumBoard,
    currentFilePairMatching: FilesPairMatching,
    currentFileMemoryGame: FilesMemoryGame,
    files: Files,
    filesMemoryGame: FilesMemoryGame,
    filesPairMatching: FilesPairMatching,
    filesScrumBoard: FilesScrumBoard,
    codeEditorTabsList: string[],
    contacts: string[],
    conversations: Conversations,
    currentConversationPhase: DialogueOption,
    currentContact: string,
    currentEvent: string,
    currentConversationHistory: string[],
    conversationsHistory: Conversations,
    isDivClicked: {}[],
    clickedDivCurrentStateLeft: string,
    clickedDivCurrentStateRight: string,
    columnLeft: string[],
    columnRight: string[],
    columnLeftClicked: string[],
    columnRightClicked: string[],
    currentDivColor: string[],
    webBrowserTabsList: string[],
    itemId: string,
    scrumBoardCurrentShuffledItems: string[][],
    memoryGameCardToggleState: { idx: number, content: string, toggleState: boolean, isLocked: boolean }[],
    clicksCounter: number,
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

export interface OnClickPairMatchingHandlers {
    [key: string]: (val: string, color: string, rightColumnIndex?: number) => void
}

export interface CurrentFileHandlers {
    [key: string]: () => { [key: string]: {} }
}
