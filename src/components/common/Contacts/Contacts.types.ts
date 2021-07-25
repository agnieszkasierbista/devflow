import {Conversations, DialogueOption} from "../../../model/state";

export interface ContactsProps extends ContactsOwnProps,
    ContactsStateProps,
    ContactsDispatchProps {
}

export interface ContactsOwnProps {

}

type Contact = string;

export interface ContactsStateProps {
    contacts: Contact[],
    conversations: Conversations,
    currentConversationPhase: DialogueOption,
    conversationsHistory: Conversations
}

export interface ContactsDispatchProps {
    dispatchStartConversation: (contact: string, event: string) => void
}