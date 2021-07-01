export interface PlayerNameInputProps extends PlayerNameInputDispatchProps,
    PlayerNameInputStateProps,
    PlayerNameInputOwnProps {
}

export interface PlayerNameInputOwnProps {

}

export interface PlayerNameInputStateProps {
    playerName: string,
    isPlayerNameInputVisible: boolean
}

export interface PlayerNameInputDispatchProps {
    dispatchChangePlayerName: (name: string) => void,
    dispatchClosePlayerNameInput: () => void,
}