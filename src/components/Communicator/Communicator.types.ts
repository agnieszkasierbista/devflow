import {Contact, Conversations} from "../../model/state";

export interface CommunicatorProps extends CommunicatorOwnProps,
    CommunicatorStateProps,
    CommunicatorDispatchProps {
}

export interface CommunicatorOwnProps {

}



export interface CommunicatorStateProps {
    contacts: Contact[],
    conversations: Conversations,
}

export interface CommunicatorDispatchProps {
    dispatchInitializeConversations: (contacts: Contact[]) => void
}