import {AppState} from "../../../../model/state";
import {ScrumBoardItemsDispatchProps, ScrumBoardItemsStateProps} from "./ScrumBoardItem.types";
import {ScrumBoardItem} from "./ScrumBoardItem.layout";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {onCardDrop, onDragCardStart} from "../../../../actions";

export function mapStateToProps(state: AppState): ScrumBoardItemsStateProps {
    return {
        currentFileScrumBoard: state.computerScreen.currentFileScrumBoard
    }
}

export function mapDispatchToProps(dispatch: Dispatch): ScrumBoardItemsDispatchProps {
    return {
        dispatchOnDragCardStart: function (idx) {
            dispatch(onDragCardStart(idx))
        },
        dispatchOnCardDrop: function (swappedItems: string[], rowIdx: number) {
            dispatch(onCardDrop(swappedItems, rowIdx))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrumBoardItem)