import React from "react";
import Conversation from "./Conversation";
import { StyledCommunicator } from "./Communicator.styled";
import {CommunicatorProps} from "./Communicator.types";
import Contacts from "./Contacts";


export const Communicator: React.FC<CommunicatorProps> = (props) => {

    React.useEffect(() => {
        props.dispatchInitializeConversations(props.contacts)
    }, [])

    return (
        <StyledCommunicator>
            <Contacts/>
            <Conversation/>
        </StyledCommunicator>
    )
};
