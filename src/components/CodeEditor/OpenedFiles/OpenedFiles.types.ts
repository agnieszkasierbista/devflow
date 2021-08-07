import { Files } from "../../../model/state";

export interface OpenedFilesProps extends OpenedFilesOwnProps,
    OpenedFilesStateProps,
    OpenedFilesDispatchProps {
}

export interface OpenedFilesOwnProps {

}

export interface OpenedFilesStateProps {
    files: Files[],
    codeEditorTabsList: string[],
    currentFile: Files
}

export interface OpenedFilesDispatchProps {

}