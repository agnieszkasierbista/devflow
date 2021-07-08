import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {DragAndDropBoardDispatchProps, DragAndDropBoardStateProps} from "./DragAndDrop.types";
import {DragAndDropBoard} from "./DragAndDropBoard.layout";
import {onDragStart, onDrop, showOrderCheckResult, shuffleColors} from "../../actions";


export function mapStateToProps(state: AppState): DragAndDropBoardStateProps {
    return {
        puzzle: state.computerScreen.puzzle,
        randomColors: state.computerScreen.randomColors
    }
}

export function mapDispatchToProps(dispatch: Dispatch): DragAndDropBoardDispatchProps {
    return {
        dispatchShuffleColors: function () {
            dispatch(shuffleColors());
        },
        dispatchOnDragStart: function (idx) {
            dispatch(onDragStart(idx))
        },
        dispatchOnDrop: function (idx) {
            dispatch(onDrop(idx))
        },
        dispatchShowOrderCheckResult: function () {
            dispatch(showOrderCheckResult())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropBoard);