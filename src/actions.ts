export const CHANGE_PLAYER_NAME= "CHANGE_PLAYER_NAME";
export const CLOSE_PLAYER_NAME_INPUT = "CLOSE_PLAYER_NAME_INPUT"

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