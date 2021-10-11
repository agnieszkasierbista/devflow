import { Files } from "../../../model/state";

export interface TabBarProps extends TabBarOwnProps,
    TabBarStateProps,
    TabBarDispatchProps {

}

export interface TabBarOwnProps {
    app: string,
}

export interface TabBarStateProps {
    files: Files,
    finishedGameNames: string[],
}

export interface TabBarDispatchProps {
    dispatchSetCurrentFile: (fileName: string) => void,
}