import {connect} from "react-redux";
import {Dispatch} from "redux";

import {DragAndDropTaskDispatchProps, DragAndDropTaskStateProps} from "./DragAndDropTask.types";
import {DragAndDropTask} from "./DragAndDropTask.layout";
import {onDragStartFiles, onDropFiles, showOrderCheckResultFiles, shuffleColorsDragAndDrop} from "../../../actions";
import {AppState} from "../../../model/state";


export function mapStateToProps(state: AppState): DragAndDropTaskStateProps {
    return {
        files: state.computerScreen.files,
        randomColors: state.computerScreen.randomColors,
        currentFilePuzzle: state.computerScreen.currentFilePuzzle
    }
}

export function mapDispatchToProps(dispatch: Dispatch): DragAndDropTaskDispatchProps {
    return {
        dispatchShuffleColorsDragAndDrop: function () {
            dispatch(shuffleColorsDragAndDrop());
        },
        dispatchOnDragStartFiles: function (idx) {
            dispatch(onDragStartFiles(idx))
        },
        dispatchOnDropFiles: function (idx) {
            dispatch(onDropFiles(idx))
        },
        dispatchShowOrderCheckResultFiles: function () {
            dispatch(showOrderCheckResultFiles())
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropTask);