import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {PairMatching} from "./PairMatching.layout";
import {PairMatchingDispatchProps, PairMatchingStateProps} from "./PairMatching.types";
import {
    clickOffLeft,
    clickOffRight,
    clickOnLeft,
    clickOnRight,
    shuffleAllItems,
    shuffleColorsFiles
} from "../../../actions";

export function mapStateToProps(state: AppState): PairMatchingStateProps {
    return {
        currentFile: state.computerScreen.currentFile,
        randomColors: state.computerScreen.randomColors,
        isDivClicked: state.computerScreen.isDivClicked,
        clickedDivCurrentStateLeft: state.computerScreen.clickedDivCurrentStateLeft,
        clickedDivCurrentStateRight: state.computerScreen.clickedDivCurrentStateRight,
        columnLeft: state.computerScreen.columnLeft,
        columnRight: state.computerScreen.columnRight,
        currentDivColor: state.computerScreen.currentDivColor,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): PairMatchingDispatchProps {
    return {
        dispatchShuffleColorsFiles: function () {
            dispatch(shuffleColorsFiles());
        },
        dispatchClickOnLeft: function (valIdx, divColor) {
            dispatch(clickOnLeft(valIdx, divColor));
        },
        dispatchClickOffLeft: function (valIdx, divColor) {
            dispatch(clickOffLeft(valIdx, divColor));
        },
        dispatchClickOnRight: function (valIdx, divColor, rightColumnIndex) {
            dispatch(clickOnRight(valIdx, divColor, rightColumnIndex));
        },
        dispatchClickOffRight: function (valIdx, divColor, rightColumnIndex) {
            dispatch(clickOffRight(valIdx, divColor, rightColumnIndex));
        },
        dispatchShuffleAllItems: function (items) {
            dispatch(shuffleAllItems(items));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairMatching);