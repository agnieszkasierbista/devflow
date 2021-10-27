export interface PlayerStatsProps extends PlayerStatsOwnProps,
    PlayerStatsDispatchProps,
    PlayerStatsStateProps {
}

export interface PlayerStatsOwnProps {

}

export interface PlayerStatsStateProps {
    playerName: string,
    isPlayerNameVisible: boolean,
    isPlayerNameInputVisible: boolean,
    points: number,
}

export interface PlayerStatsDispatchProps {

}