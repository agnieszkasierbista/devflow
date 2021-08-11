import {AppState} from "../../../../model/state";
import {ScrumBoardItemsDispatchProps, ScrumBoardItemsStateProps} from "./ScrumBoardItem.types";
import {ScrumBoardItem} from "./ScrumBoardItem.layout";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export function mapStateToProps(state: AppState): ScrumBoardItemsStateProps {
    return {}
}

export function mapDispatchToProps(dispatch: Dispatch): ScrumBoardItemsDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrumBoardItem)