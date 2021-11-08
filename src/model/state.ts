import {codeEditorTabsPaths, webBrowserTabsPaths} from "./paths";

export interface AppState<Path = AllPaths> {
    workspace: Workspace,
    computerScreen: ComputerScreen<Path>,
    guestSlot: GuestSlot
}

export interface Workspace {
    isOverlayVisible: boolean,
    playerName: string,
    isPlayerNameInputVisible: boolean,
    isPlayerNameVisible: boolean,
    timer: number,
    timerStartingPoint: number,
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

export interface FileMemoryGame<Path = AllPaths>{
    fileName: FileName,
    taskType: TaskType,
    items: string[],
    shuffledItems: string[],
    path: Path,
    component: string,
}

export interface FileDragAndDrop<Path = AllPaths> {
    fileName: FileName,
    items: string[],
    shuffledItems: string[],
    colors: { [key: string]: string },
    beingDragged: number,
    shouldShowOrderCheckResult: boolean,
    taskType: TaskType,
    path: Path,
    component: string,
}

export interface FilePairMatching<Path = AllPaths> {
    fileName: FileName,
    itemsArray: string[][],
    colors: { [key: string]: string },
    beingDragged: number,
    shouldShowOrderCheckResult: boolean,
    taskType: TaskType,
    path: Path,
    component: string,
}

export interface FileScrumBoard<Path = AllPaths> {
    fileName: FileName,
    itemsArray: string[][],
    shuffledItemsArray: string[][],
    beingDragged: number,
    taskType: TaskType,
    path: Path,
    component: string,
}

export type Files<Path = AllPaths> = File<Path>[]

export type File<Path = AllPaths> = FileDragAndDrop<Path> | FileMemoryGame<Path> | FilePairMatching<Path> | FileScrumBoard<Path>;


export interface ComputerScreen<Path = AllPaths> {
    randomColors: string[],
    puzzle: FileDragAndDrop,
    currentFilePuzzle: FileDragAndDrop,
    currentFileScrumBoard: FileScrumBoard,
    currentFilePairMatching: FilePairMatching,
    currentFileMemoryGame: FileMemoryGame,
    files: Files<Path>,
    filesMemoryGame: FileMemoryGame,
    filesPairMatching: FilePairMatching,
    filesScrumBoard: FileScrumBoard,
    codeEditorTabsList: string[],
    contacts: string[],
    conversations: Conversations,
    currentConversationPhase: DialogueOption,
    currentContact: string,
    currentEvent: string,
    currentConversationHistory: string[],
    conversationsHistory: Conversations,
    divsClickedState: {}[],
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
    clicksCounterDragAndDrop: number,
    finishedGameNames: string[],
    pairMatchingStartTime: number,
    pairMatchingEndTime: number,
    points: number
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

export type AllPaths = WebBrowserPaths | CodeEditorPaths | ""

export type CodeEditorPaths = typeof codeEditorTabsPaths[number]

export type CodeEditorComponentsHandlers = Record<CodeEditorPaths, () => JSX.Element>

export type WebBrowserPaths = typeof webBrowserTabsPaths[number];
export type WebBrowserComponentsHandlers = Record<WebBrowserPaths, () => JSX.Element>