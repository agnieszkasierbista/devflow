import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {MemoryGameDispatchProps, MemoryGameStateProps} from "./MemoryGame.types";
import {MemoryGame} from "./MemoryGame.layout";
import {connect} from "react-redux";
import {setToggleStateToFalse, toggleCard} from "../../../actions";


export function mapStateToProps(state: AppState): MemoryGameStateProps {
    return {
        currentFileMemoryGame: state.computerScreen.currentFileMemoryGame,
        memoryGameCardToggleState: state.computerScreen.memoryGameCardToggleState,
        clicksCounter: state.computerScreen.clicksCounter,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): MemoryGameDispatchProps {
    return {
        dispatchToggleCard: function (idx, item, isLocked) {
            dispatch(toggleCard(idx, item, isLocked))
        },
        dispatchSetToggleStateToFalse: function () {
            dispatch(setToggleStateToFalse())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame)