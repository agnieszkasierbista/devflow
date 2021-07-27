import {connect} from "react-redux";
import {Dispatch} from "redux";
import {delayWork, endConversation, ready, reject, startWork} from "../../actions";
import {AppState} from "../../model/state";
import {Conversation} from "../common/Conversation/Conversation.layout";
import {ConversationDispatchProps, ConversationStateProps} from "../common/Conversation/Conversation.types";


export function mapStateToProps(state: AppState): ConversationStateProps {
    return {
        conversations: state.guestSlot.conversations,
        currentConversationPhase: state.guestSlot.currentConversationPhase,
        currentConversationHistory: state.guestSlot.currentConversationHistory,
        currentContact: state.guestSlot.currentContact,
        conversationsHistory: state.guestSlot.conversationsHistory,
        currentEvent: state.guestSlot.currentEvent,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): ConversationDispatchProps {
    return {
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