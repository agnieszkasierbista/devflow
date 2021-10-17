export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export const CLOSE_PLAYER_NAME_INPUT = "CLOSE_PLAYER_NAME_INPUT";
export const ON_DRAG_START = 'ON_DRAG_START';
export const ON_DROP = 'ON_DROP';
export const SHOW_ORDER_CHECK_RESULT = 'SHOW_ORDER_CHECK_RESULT';
export const SHUFFLE_COLORS = "SHUFFLE_COLORS";
export const ON_DRAG_START_FILES = 'ON_DRAG_START_FILES';
export const ON_DROP_FILES = 'ON_DROP_FILES';
export const SHOW_ORDER_CHECK_RESULT_FILES = 'SHOW_ORDER_CHECK_RESULT_FILES';
export const SHUFFLE_COLORS_DRAG_AND_DROP = "SHUFFLE_COLORS_DRAG_AND_DROP";
export const SHUFFLE_COLORS_PAIR_MATCHING = "SHUFFLE_COLORS_PAIR_MATCHING";
export const START_CONVERSATION = "START_CONVERSATION";
export const END_CONVERSATION = "END_CONVERSATION";
export const INITIALIZE_CONVERSATIONS = "INITIALIZE_CONVERSATIONS";
export const READY = "READY";
export const REJECT = "REJECT";
export const START_WORK = "START_WORK";
export const DELAY_WORK = "DELAY_WORK";
export const INITIALIZE_VISIT = "INITIALIZE_VISIT";
export const START_VISIT = "START_VISIT";
export const END_VISIT = "END_VISIT"
export const READY_VISIT = "READY_VISIT";
export const REJECT_VISIT = "REJECT_VISIT";
export const START_WORK_VISIT = "START_WORK_VISIT";
export const DELAY_WORK_VISIT = "DELAY_WORK_VISIT";
export const CLOSE_VISIT = "CLOSE_VISIT";
export const SET_CURRENT_FILE = "SET_CURRENT_FILE";
export const CLICK_ON_LEFT = "CLICK_ON_LEFT";
export const CLICK_OFF_LEFT = "CLICK_OFF_LEFT";
export const CLICK_ON_RIGHT = "CLICK_ON_RIGHT";
export const CLICK_OFF_RIGHT = "CLICK_OFF_RIGHT";
export const SHUFFLE_ALL_ITEMS = "SHUFFLE_ALL_ITEMS";
export const CHECK_MATCHED_PAIRS = "CHECK_MATCHED_PAIRS";
export const ON_DRAG_CARD_START = "ON_DRAG_CARD_START";
export const ON_CARD_DROP = "ON_CARD_DROP";
export const TOGGLE_CARD = "TOGGLE_CARD";
export const SET_TOGGLE_STATE_TO_FALSE = "SET_TOGGLE_STATE_TO_FALSE";
export const RESTART_GAME = "RESTART_GAME";
export const SET_COMPUTER_SCREEN_INITIAL_INFO = "SET_COMPUTER_SCREEN_INITIAL_INFO";
export const CLEAR_MEMORY_GAME_BOARD_AND_ADD_GAME_NAME_TO_FINISHED = "CLEAR_MEMORY_GAME_BOARD_AND_ADD_GAME_NAME_TO_FINISHED";
export const HIDE_ORDER_CHECK_RESULT = "HIDE_ORDER_CHECK_RESULT";


export function clearMemoryGameBoardAndAddGameNameToFinished(name: string) {
    return {
        type: CLEAR_MEMORY_GAME_BOARD_AND_ADD_GAME_NAME_TO_FINISHED,
        payload: name
    }
}
export function setComputerScreenInitialInfo() {
    return {
        type: SET_COMPUTER_SCREEN_INITIAL_INFO
    }
}

export function restartGame() {
    return {
        type: RESTART_GAME
    }
}

export function setToggleStateToFalse() {
    return {
        type: SET_TOGGLE_STATE_TO_FALSE,
    }
}

export function toggleCard(idx: number, item: string, isLocked: boolean) {
    return {
        type: TOGGLE_CARD,
        payload: {idx, item, isLocked}
    }
}


export function onDragCardStart(itemId: number) {
    return {
        type: ON_DRAG_CARD_START,
        payload: itemId
    }
}

export function onCardDrop(swappedItems: string[], rowIdx: number) {
    return {
        type: ON_CARD_DROP,
        payload: {swappedItems, rowIdx}
    }
}

export function checkMatchedPairs() {
    return {
        type: CHECK_MATCHED_PAIRS
    }
}

export function shuffleAllItems(items: string[][]) {
    return {
        type: SHUFFLE_ALL_ITEMS,
        payload: items
    }
}

export function clickOnLeft(val: string, color: string) {
    return {
        type: CLICK_ON_LEFT,
        payload: {val, color}
    }
}

export function clickOffLeft(val: string, color: string) {
    return {
        type: CLICK_OFF_LEFT,
        payload: {val, color}
    }
}

export function clickOnRight(val: string, color: string, rightColumnIndex: number | undefined) {
    return {
        type: CLICK_ON_RIGHT,
        payload: {val, color, rightColumnIndex}
    }
}

export function clickOffRight(val: string, color: string, rightColumnIndex: number | undefined) {
    return {
        type: CLICK_OFF_RIGHT,
        payload: {val, color, rightColumnIndex}
    }
}

export function setCurrentFile(fileName: string) {
    return {
        type: SET_CURRENT_FILE,
        payload: fileName
    }
}

export function closeVisit() {
    return {
        type: CLOSE_VISIT,
    }
}

export function ready(event: string) {
    return {
        type: READY,
        payload: event
    }
}

export function readyVisit(event: string) {
    return {
        type: READY_VISIT,
        payload: event
    }
}

export function reject(event: string) {
    return {
        type: REJECT,
        payload: event
    }
}

export function rejectVisit(event: string) {
    return {
        type: REJECT_VISIT,
        payload: event
    }
}

export function delayWork(event: string) {
    return {
        type: DELAY_WORK,
        payload: event
    }
}

export function delayWorkVisit(event: string) {
    return {
        type: DELAY_WORK_VISIT,
        payload: event
    }
}

export function startWork(event: string) {
    return {
        type: START_WORK,
        payload: event
    }
}

export function startWorkVisit(event: string) {
    return {
        type: START_WORK_VISIT,
        payload: event
    }
}

export function initializeConversations(contacts: string[]) {
    return {
        type: INITIALIZE_CONVERSATIONS,
        payload: contacts
    }
}

export function initializeVisit(playerName: string, guests: string[]) {
    return {
        type: INITIALIZE_VISIT,
        payload: {playerName, guests}
    }
}

export function startConversation(contact: string, event: string) {
    return {
        type: START_CONVERSATION,
        payload: {contact, event}
    }
}

export function startVisit(guest: string, event: string) {
    return {
        type: START_VISIT,
        payload: {guest, event}
    }
}

export function endConversation(event: string) {
    return {
        type: END_CONVERSATION,
        payload: event
    }
}

export function endVisit(event: string) {
    return {
        type: END_VISIT,
        payload: event
    }
}

export function shuffleColors() {
    return {
        type: SHUFFLE_COLORS
    }
}

export function onDragStart(idx: number) {
    return {
        type: ON_DRAG_START,
        payload: idx
    }
}

export function onDrop(swappedItems: string[]) {
    return {
        type: ON_DROP,
        payload: swappedItems
    }
}

export function showOrderCheckResult() {
    return {
        type: SHOW_ORDER_CHECK_RESULT
    }
}

export function hideOrderCheckResult() {
    return {
        type: HIDE_ORDER_CHECK_RESULT
    }
}

export function shuffleColorsDragAndDrop() {
    return {
        type: SHUFFLE_COLORS_DRAG_AND_DROP
    }
}

export function shuffleColorsPairMatching() {
    return {
        type: SHUFFLE_COLORS_PAIR_MATCHING
    }
}

export function onDragStartFiles(idx: number) {
    return {
        type: ON_DRAG_START_FILES,
        payload: idx
    }
}

export function onDropFiles(swappedItems: string[]) {
    return {
        type: ON_DROP_FILES,
        payload: swappedItems
    }
}

export function showOrderCheckResultFiles() {
    return {
        type: SHOW_ORDER_CHECK_RESULT_FILES
    }
}


export function changePlayerName(name: string) {
    return {
        type: CHANGE_PLAYER_NAME,
        payload: name
    }
}

export function closePlayerNameInput() {
    return {
        type: CLOSE_PLAYER_NAME_INPUT,
    }
}