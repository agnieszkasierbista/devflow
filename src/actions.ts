export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export const CLOSE_PLAYER_NAME_INPUT = "CLOSE_PLAYER_NAME_INPUT";
export const ON_DRAG_START = 'ON_DRAG_START';
export const ON_DROP = 'ON_DROP';
export const SHOW_ORDER_CHECK_RESULT = 'SHOW_ORDER_CHECK_RESULT';
export const SHUFFLE_COLORS = "SHUFFLE_COLORS";
export const ON_DRAG_START_FILES = 'ON_DRAG_START_FILES';
export const ON_DROP_FILES = 'ON_DROP_FILES';
export const SHOW_ORDER_CHECK_RESULT_FILES = 'SHOW_ORDER_CHECK_RESULT_FILES';
export const SHUFFLE_COLORS_FILES = "SHUFFLE_COLORS_FILES";
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

export function initializeVisit(guests: string[]) {
    return {
        type: INITIALIZE_VISIT,
        payload: guests
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

export function shuffleColorsFiles() {
    return {
        type: SHUFFLE_COLORS_FILES
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