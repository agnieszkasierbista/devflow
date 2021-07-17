import {connect} from "react-redux";
import {Dispatch} from "redux";
import {delayWork, endConversation, ready, reject, startConversation, startWork} from "../../../actions";
import {AppState} from "../../../model/state";
import {Conversation} from "./Conversation.layout";
import {ConversationDispatchProps, ConversationStateProps} from "./Conversation.types";


export function mapStateToProps(state: AppState): ConversationStateProps {
    return {
        conversations: state.computerScreen.conversations,
        currentConversationPhase: state.computerScreen.currentConversationPhase
    }
}

export function mapDispatchToProps(dispatch: Dispatch): ConversationDispatchProps {
    return {
        dispatchStartConversation: function (contact) {
            dispatch(startConversation(contact))
        },
        dispatchEndConversation: function (event) {
            dispatch(endConversation(event))
        },
        dispatchReady: function (event) {
            dispatch(ready(event))
        },
        dispatchReject: function (event) {
            dispatch(reject(event))
        },
        dispatchStartWork: function (event) {
            dispatch(startWork(event))
        },
        dispatchDelayWork: function (event) {
            dispatch(delayWork(event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);