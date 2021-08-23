import {FileName, FilesMemoryGame} from "../../../model/state";


export interface MemoryGameProps extends MemoryGameOwnProps,
    MemoryGameDispatchProps, MemoryGameStateProps {

}

export interface MemoryGameOwnProps {
    fileName: FileName,
}

export interface MemoryGameDispatchProps {
    dispatchToggleCard: (idx: number, item: string, isLocked: boolean) => void,
    dispatchSetToggleStateToFalse: () => void,
    dispatchRestartGame: () => void,
}

export interface MemoryGameStateProps {
    currentFileMemoryGame: FilesMemoryGame,
    memoryGameCardToggleState: { idx: number, content: string, toggleState: boolean, isLocked: boolean }[],
    clicksCounter: number
}