import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {Communicator} from "./Communicator.layout";
import {CommunicatorDispatchProps, CommunicatorStateProps} from "./Communicator.types";
import {initializeConversations} from "../../actions";


export function mapStateToProps(state: AppState): CommunicatorStateProps {

    return {

        contacts: state.computerScreen.contacts,
        conversations: state.computerScreen.conversations,

    }
}

export function mapDispatchToProps(dispatch: Dispatch): CommunicatorDispatchProps {
    return {
        dispatchInitializeConversations: function (contacts) {
            return dispatch(initializeConversations(contacts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Communicator);