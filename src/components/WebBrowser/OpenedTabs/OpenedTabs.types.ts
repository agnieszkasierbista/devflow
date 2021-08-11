import {Files} from "../../../model/state";

export interface OpenedTabsProps extends OpenedTabsOwnProps,
    OpenedTabsStateProps,
    OpenedTabsDispatchProps {
}

export interface OpenedTabsOwnProps {

}

export interface OpenedTabsStateProps {
    files: Files[],
    codeEditorTabsList: string[],
    currentFile: Files
}

export interface OpenedTabsDispatchProps {

}