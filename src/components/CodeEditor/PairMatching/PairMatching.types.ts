import {FileName, Files} from "../../../model/state";

export interface PairMatchingProps extends PairMatchingStateProps,
    PairMatchingDispatchProps, PairMatchingOwnProps {

}

export interface PairMatchingStateProps {
    currentFile: Files,
    randomColors: string[],
    isDivClicked: {[key: string]: boolean}[],
    clickedDivCurrentStateLeft: string,
    clickedDivCurrentStateRight: string,
    columnLeft: string[],
    columnRight: string[],

}

export interface PairMatchingDispatchProps {
    dispatchShuffleColorsFiles: () => void,
    dispatchClickOnLeft: (val: string) => void,
    dispatchClickOffLeft: (val: string) => void,
    dispatchClickOnRight: (val: string) => void,
    dispatchClickOffRight: (val: string) => void,
    dispatchShuffleAllItems: (items: string[][]) => void,
}

export interface PairMatchingOwnProps {
    fileName: FileName
}

