import {connect} from "react-redux";
import {Dispatch} from "redux";
import {endConversation, startConversation} from "../../../actions";
import {AppState} from "../../../model/state";
import {Conversation} from "./Conversation.layout";
import {ConversationDispatchProps, ConversationStateProps} from "./Conversation.types";


export function mapStateToProps(state: AppState): ConversationStateProps {
    return {
        conversation: state.computerScreen.conversation,
    }
}

export function mapDispatchToProps(dispatch: Dispatch): ConversationDispatchProps {
    return {
        dispatchStartConversation: function (event) {
            dispatch(startConversation(event))
        },
        dispatchEndConversation: function (event) {
            dispatch(endConversation(event))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);