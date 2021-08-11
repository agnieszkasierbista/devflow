import {FileName, Files} from "../../../model/state";

export interface ScrumBoardProps extends ScrumBoardStateProps,
    ScrumBoardDispatchProps, ScrumBoardOwnProps {

}

export interface ScrumBoardStateProps {
    currentFile: Files
}

export interface ScrumBoardDispatchProps {

}

export interface ScrumBoardOwnProps {
    fileName: FileName
}