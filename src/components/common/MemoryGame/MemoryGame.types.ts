import {FileName, FilesMemoryGame} from "../../../model/state";


export interface MemoryGameProps extends MemoryGameOwnProps,
    MemoryGameDispatchProps, MemoryGameStateProps {

}

export interface MemoryGameOwnProps {
    fileName: FileName,
}

export interface MemoryGameDispatchProps {
 dispatchToggleCard: (idx: number, item: string | string[]) => void,
}

export interface MemoryGameStateProps {
    currentFileMemoryGame: FilesMemoryGame,
    memoryGameCardToggleState?: {}[]
}