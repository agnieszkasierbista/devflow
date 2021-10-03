import {FileName, FilesMemoryGame} from "../../../model/state";
import {clearMemoryGameBoardAndAddGameNameToFinished} from "../../../actions";


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
}

export interface MemoryGameStateProps {
    currentFileMemoryGame: FilesMemoryGame,
    memoryGameCardToggleState: { idx: number, content: string, toggleState: boolean, isLocked: boolean }[],
    clicksCounter: number
}