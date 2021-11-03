import {FileMemoryGame} from "../../../model/state";


export interface MemoryGameProps extends MemoryGameOwnProps,
    MemoryGameDispatchProps, MemoryGameStateProps {

}

export interface MemoryGameOwnProps {

}

export interface MemoryGameDispatchProps {
    dispatchToggleCard: (idx: number, item: string, isLocked: boolean) => void,
    dispatchSetToggleStateToFalse: () => void,
    dispatchRestartGame: () => void,
    dispatchClearMemoryGameBoardAndAddGameNameToFinished: (name: string) => void,
    dispatchGivePoints: () => void,
}

export interface MemoryGameStateProps {
    currentFileMemoryGame: FileMemoryGame,
    memoryGameCardToggleState: { idx: number, content: string, toggleState: boolean, isLocked: boolean }[],
    clicksCounter: number
}