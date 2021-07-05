export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export const CLOSE_PLAYER_NAME_INPUT = "CLOSE_PLAYER_NAME_INPUT";
export const ON_DRAG_START = 'ON_DRAG_START';
export const ON_DROP = 'ON_DROP';
export const SHOW_ORDER_CHECK_RESULT = 'SHOW_ORDER_CHECK_RESULT';

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