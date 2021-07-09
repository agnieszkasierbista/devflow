export interface CodeEditorProps extends CodeEditorOwnProps,
    CodeEditorStateProps,
    CodeEditorDispatchProps {
}

export interface CodeEditorOwnProps {

}

export interface CodeEditorStateProps {
    codeEditorTabsList: string[];
    openedFiles: string[];
}

export interface CodeEditorDispatchProps {

}