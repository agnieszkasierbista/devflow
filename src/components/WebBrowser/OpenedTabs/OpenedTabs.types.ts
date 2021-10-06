import {Files, FilesDragAndDrop, FilesMemoryGame, FilesScrumBoard, WebBrowserPaths} from "../../../model/state";

export interface OpenedTabsProps extends OpenedTabsOwnProps,
    OpenedTabsStateProps,
    OpenedTabsDispatchProps {
}

export interface OpenedTabsOwnProps {

}

export interface OpenedTabsStateProps {
    files: Files<WebBrowserPaths>,
    codeEditorTabsList: string[],
    currentFilePuzzle: FilesDragAndDrop,
    currentFileMemoryGame: FilesMemoryGame,
    currentFileScrumBoard: FilesScrumBoard,
}

export interface OpenedTabsDispatchProps {

}