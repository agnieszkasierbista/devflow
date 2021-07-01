export interface PlayerNameProps extends PlayerNameOwnProps,
    PlayerNameDispatchProps,
    PlayerNameStateProps {
}

export interface PlayerNameOwnProps {

}

export interface PlayerNameStateProps {
    playerName: string,
    isPlayerNameVisible: boolean,
    isPlayerNameInputVisible: boolean
}

export interface PlayerNameDispatchProps {

}