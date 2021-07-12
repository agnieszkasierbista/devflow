import { Conversation } from "../../../model/state";

export interface ConversationProps extends ConversationOwnProps,
    ConversationStateProps,
    ConversationDispatchProps {
}

export interface ConversationOwnProps {

}

export interface ConversationStateProps {
    conversation: Conversation,
}

export interface ConversationDispatchProps {
    dispatchStartConversation: (event: string) => void,
    dispatchEndConversation: (event:string) => void,
}