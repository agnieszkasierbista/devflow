import React from 'react';
import {StyledGuestSlot} from './GuestSlot.styled'
import Conversation from "../common/Conversation/Conversation";
import Contacts from "../common/Contacts/Contacts";
import {GuestSlotProps} from "./GuestSlot.types";


export const GuestSlot: React.FC<GuestSlotProps> = (props) => {

    React.useEffect(() => {
        props.dispatchInitializeConversations(props.contacts)
    }, [])


    return (
        <StyledGuestSlot>
            <Contacts/>
            <Conversation/>
        </StyledGuestSlot>
    )
};
