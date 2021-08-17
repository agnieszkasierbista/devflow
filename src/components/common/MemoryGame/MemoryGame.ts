import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {MemoryGameDispatchProps, MemoryGameStateProps} from "./MemoryGame.types";
import {MemoryGame} from "./MemoryGame.layout";
import {connect} from "react-redux";
import {toggleCard} from "../../../actions";


export function mapStateToProps(state: AppState): MemoryGameStateProps {
    return {
        currentFile: state.computerScreen.currentFile,
        memoryGameCardToggleState: state.computerScreen.memoryGameCardToggleState
    }
}

export function mapDispatchToProps(dispatch: Dispatch): MemoryGameDispatchProps {
    return {
        dispatchToggleCard: function (idx, item) {
            dispatch(toggleCard(idx, item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame)