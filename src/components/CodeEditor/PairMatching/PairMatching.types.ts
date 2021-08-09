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
    columnLeftClicked: string[],
    columnRight: string[],
    columnRightClicked: string[],
    currentDivColor: string[],

}

export interface PairMatchingDispatchProps {
    dispatchShuffleColorsFiles: () => void,
    dispatchClickOnLeft: (val: string, colors: string) => void,
    dispatchClickOffLeft: (val: string, colors: string) => void,
    dispatchClickOnRight: (val: string, colors: string, rightColumnIndex: number | undefined) => void,
    dispatchClickOffRight: (val: string, colors: string, rightColumnIndex: number | undefined) => void,
    dispatchShuffleAllItems: (items: string[][]) => void,
    dispatchCheckMatchedPairs: () => void,
}

export interface PairMatchingOwnProps {
    fileName: FileName
}

