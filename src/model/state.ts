import {configFilePath, indexFilePath, mainFilePath} from "./paths";

export interface AppState {
    workspace: Workspace,
    computerScreen: ComputerScreen<CodeEditorPaths>,
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

export interface FilesMemoryGame<Path = string>{
    fileName: FileName,
    taskType: TaskType,
    items: string[],
    shuffledItems: string[],
    path: Path,
    component: string,
}

export interface FilesDragAndDrop<Path = string> {
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

export interface FilesPairMatching<Path = string> {
    fileName: FileName,
    itemsArray: string[][],
    colors: { [key: string]: string },
    beingDragged: number,
    shouldShowOrderCheckResult: boolean,
    taskType: TaskType,
    path: Path,
    component: string,
}

export interface FilesScrumBoard<Path = string> {
    fileName: FileName,
    itemsArray: string[][],
    shuffledItemsArray: string[][],
    beingDragged: number,
    taskType: TaskType,
    path: Path,
    component: string,
}

export type Files<Path = string> = AllFiles<Path>[]

export interface AllFiles<Path = string> extends FilesDragAndDrop<Path>,
    FilesMemoryGame<Path>,
    FilesPairMatching<Path>,
    FilesScrumBoard<Path> {
}

export interface ComputerScreen<Path = string> {
    randomColors: string[],
    puzzle: FilesDragAndDrop,
    currentFilePuzzle: FilesDragAndDrop,
    currentFileScrumBoard: FilesScrumBoard,
    currentFilePairMatching: FilesPairMatching,
    currentFileMemoryGame: FilesMemoryGame,
    files: Files<Path>,
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
    finishedGameNames: string[],
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
    [key: string]: () => ComputerScreen<CodeEditorPaths>
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

export type CodeEditorPaths = typeof configFilePath | typeof indexFilePath | typeof mainFilePath

export type CodeEditorComponentsHandlers = Record<CodeEditorPaths, () => JSX.Element>