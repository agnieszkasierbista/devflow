import {FileName, FilePairMatching} from "../../../model/state";

export interface PairMatchingProps extends PairMatchingStateProps,
    PairMatchingDispatchProps, PairMatchingOwnProps {

}

export interface PairMatchingStateProps {
    currentFilePairMatching: FilePairMatching,
    randomColors: string[],
    isDivClicked: {[key: string]: boolean}[],
    columnLeft: string[],
    columnLeftClicked: string[],
    columnRight: string[],
    columnRightClicked: string[],
    currentDivColor: string[],

}

export interface PairMatchingDispatchProps {
    dispatchShuffleColorsPairMatching: () => void,
    dispatchClickOnLeft: (val: string, colors: string) => void,
    dispatchClickOffLeft: (val: string, colors: string) => void,
    dispatchClickOnRight: (val: string, colors: string, rightColumnIndex: number | undefined) => void,
    dispatchClickOffRight: (val: string, colors: string, rightColumnIndex: number | undefined) => void,
    dispatchShuffleAllItems: (items: string[][]) => void,
    dispatchCheckMatchedPairs: () => void,
}

export interface PairMatchingOwnProps {

}

