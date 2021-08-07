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
        columnLeft:state.computerScreen.columnLeft,
        columnRight:state.computerScreen.columnRight,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): PairMatchingDispatchProps {
    return {
        dispatchShuffleColorsFiles: function () {
            dispatch(shuffleColorsFiles());
        },
        dispatchClickOnLeft: function (valIdx) {
            dispatch(clickOnLeft(valIdx));
        },
        dispatchClickOffLeft: function (valIdx) {
            dispatch(clickOffLeft(valIdx));
        },
        dispatchClickOnRight: function (valIdx) {
            dispatch(clickOnRight(valIdx));
        },
        dispatchClickOffRight: function (valIdx) {
            dispatch(clickOffRight(valIdx));
        },
        dispatchShuffleAllItems: function (items) {
            dispatch(shuffleAllItems(items));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PairMatching);