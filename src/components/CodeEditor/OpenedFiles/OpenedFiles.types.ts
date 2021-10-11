import {CodeEditorPaths, Files, FileDragAndDrop, FilePairMatching} from "../../../model/state";

export interface OpenedFilesProps extends OpenedFilesOwnProps,
    OpenedFilesStateProps,
    OpenedFilesDispatchProps {
}

export interface OpenedFilesOwnProps {

}

export interface OpenedFilesStateProps {
    files: Files<CodeEditorPaths>,
    codeEditorTabsList: string[],
    currentFilePuzzle: FileDragAndDrop,
    currentFilePairMatching: FilePairMatching,
}

export interface OpenedFilesDispatchProps {

}