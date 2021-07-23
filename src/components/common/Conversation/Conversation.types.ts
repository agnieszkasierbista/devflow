import {Conversations, DialogueOption} from "../../../model/state";

export interface ConversationProps extends ConversationOwnProps,
    ConversationStateProps,
    ConversationDispatchProps {
}

export interface ConversationOwnProps {

}

export interface ConversationStateProps {
    conversations: Conversations,
    currentConversationPhase: DialogueOption,
    currentConversationHistory: string[],
    currentContact: string,
    conversationsHistory: Conversations,
    currentEvent: string
}

export interface ConversationDispatchProps {
    dispatchEndConversation: (event: string) => void,
    dispatchReady: (event: string) => void,
    dispatchReject: (event: string) => void,
    dispatchStartWork: (event: string) => void,
    dispatchDelayWork: (event: string) => void
}