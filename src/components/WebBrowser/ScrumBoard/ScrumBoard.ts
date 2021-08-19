import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {ScrumBoard} from "./ScrumBoard.layout";
import {ScrumBoardDispatchProps, ScrumBoardStateProps} from "./ScrumBoard.types";


export function mapStateToProps(state: AppState): ScrumBoardStateProps {
    return {
        currentFileScrumBoard: state.computerScreen.currentFileScrumBoard
    }
}

export function mapDispatchToProps(dispatch: Dispatch): ScrumBoardDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrumBoard)