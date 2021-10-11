import {Files, FileDragAndDrop, FileMemoryGame, FileScrumBoard, WebBrowserPaths} from "../../../model/state";

export interface OpenedTabsProps extends OpenedTabsOwnProps,
    OpenedTabsStateProps,
    OpenedTabsDispatchProps {
}

export interface OpenedTabsOwnProps {

}

export interface OpenedTabsStateProps {
    files: Files<WebBrowserPaths>,
    codeEditorTabsList: string[],
    currentFilePuzzle: FileDragAndDrop,
    currentFileMemoryGame: FileMemoryGame,
    currentFileScrumBoard: FileScrumBoard,
}

export interface OpenedTabsDispatchProps {

}