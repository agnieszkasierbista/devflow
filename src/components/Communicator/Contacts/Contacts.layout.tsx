import {ContactsProps} from "./Contacts.types";
import React from "react";
import {StyledContact, StyledContacts} from "./Contacts.styled";

export const Contacts: React.FC<ContactsProps> = (props) => {
    return (
        <StyledContacts>
            {
                props.contacts.map((contact, idx) => {
                    return (
                        <StyledContact key={idx}>
                            {contact}
                        </StyledContact>
                    )
                })
            }
        </StyledContacts>
    )
}