export interface TabBarProps extends TabBarOwnProps,
    Pick<TabBarStateProps, "codeEditorTabsList" | "webBrowserTabsList">,
    TabBarDispatchProps {

}

export interface TabBarOwnProps {
    app: string[],
}

export interface TabBarStateProps {
    codeEditorTabsList: string[];
    webBrowserTabsList: string[];
}

export interface TabBarDispatchProps {
    dispatchSetCurrentFile: (fileName: string) => void,
}