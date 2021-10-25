export interface TimerProps extends TimerStateProps,
    TimerDispatchProps,
    TimerOwnProps {

}

export interface TimerStateProps {
    timer: number,
}

export interface TimerDispatchProps {
    dispatchUpdateTimer: () => void
}

export interface TimerOwnProps {
}

