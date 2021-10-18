import {connect, DefaultRootState, MapStateToPropsFactory} from "react-redux";
import {AppState} from "../../model/state";
import {PlayerName} from "./PlayerName.layout";
import {PlayerNameDispatchProps, PlayerNameOwnProps, PlayerNameProps, PlayerNameStateProps} from "./PlayerName.types";
import {initializeVisit} from "../../actions";
import {Dispatch} from "redux";


function mapStateToProps(state: AppState): PlayerNameStateProps {
    return {
        playerName: state.workspace.playerName,
        isPlayerNameInputVisible: state.workspace.isPlayerNameInputVisible,
        isPlayerNameVisible: state.workspace.isPlayerNameVisible,
        guests: state.guestSlot.guests,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): PlayerNameDispatchProps {
    return {
        dispatchInitializeVisit: function (playerName, guests) {
            dispatch(initializeVisit(playerName, guests))
        }
    }
}

const merge = function ({guests, ...playerNameStateProps}: PlayerNameStateProps,
                        playerNameDispatchProps: PlayerNameDispatchProps,
                        ownProps: PlayerNameOwnProps): PlayerNameProps {
    return {
        ...playerNameStateProps,
        dispatchInitializeVisit: () => {
            playerNameDispatchProps.dispatchInitializeVisit(
                playerNameStateProps.playerName,
                guests
            )
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps, merge)(PlayerName)