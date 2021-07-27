import React from 'react';
import {StyledGuestSlot} from './GuestSlot.styled'
import Conversation from "../GuestSlot/Conversation";
import Contacts from "../GuestSlot/Contacts";
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
