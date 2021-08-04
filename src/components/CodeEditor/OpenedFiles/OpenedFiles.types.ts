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
}

export interface OpenedFilesDispatchProps {

}