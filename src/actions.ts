export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export const CLOSE_PLAYER_NAME_INPUT = "CLOSE_PLAYER_NAME_INPUT";
export const ON_DRAG_START = 'ON_DRAG_START';
export const ON_DROP = 'ON_DROP';
export const SHOW_ORDER_CHECK_RESULT = 'SHOW_ORDER_CHECK_RESULT';
export const SHUFFLE_COLORS = "SHUFFLE_COLORS";
export const START_CONVERSATION = "START_CONVERSATION";
export const END_CONVERSATION = "END_CONVERSATION";
export const INITIALIZE_CONVERSATION = "INITIALIZE_CONVERSATION";

export function initializeConversation(contact: string) {
    return {
        type: INITIALIZE_CONVERSATION,
        payload: contact
    }
}

export function startConversation(event: string) {
    return{
        type: START_CONVERSATION,
        payload: event
    }
}

export function endConversation(event: string) {
    return{
        type: END_CONVERSATION,
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