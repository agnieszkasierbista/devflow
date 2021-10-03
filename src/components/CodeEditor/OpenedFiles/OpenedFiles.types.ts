import {CodeEditorPaths, Files, FilesDragAndDrop, FilesPairMatching} from "../../../model/state";

export interface OpenedFilesProps extends OpenedFilesOwnProps,
    OpenedFilesStateProps,
    OpenedFilesDispatchProps {
}

export interface OpenedFilesOwnProps {

}

export interface OpenedFilesStateProps {
    files: Files<CodeEditorPaths>,
    codeEditorTabsList: string[],
    currentFilePuzzle: FilesDragAndDrop,
    currentFilePairMatching: FilesPairMatching,
}

export interface OpenedFilesDispatchProps {

}