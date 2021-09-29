import { Files } from "../../../model/state";

export interface TabBarProps extends TabBarOwnProps,
    Pick<TabBarStateProps, "codeEditorTabsList" | "webBrowserTabsList" | "finishedGameNames" | "files">,
    TabBarDispatchProps {

}

export interface TabBarOwnProps {
    app: string,
}

export interface TabBarStateProps {
    files: Files,
    //TODO: to ponizej chyba juz nie jest nigdzie uzywane
    codeEditorTabsList: string[],
    webBrowserTabsList: string[],
    finishedGameNames: string[],
}

export interface TabBarDispatchProps {
    dispatchSetCurrentFile: (fileName: string) => void,
}