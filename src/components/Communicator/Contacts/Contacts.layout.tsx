import {ContactsProps} from "./Contacts.types";
import React from "react";
import {StyledContact, StyledContacts} from "./Contacts.styled";
import {Link} from "react-router-dom";
import {
    conversationWithBarbaraPath,
    conversationWithJohnPath,
    conversationWithLinglingPath
} from "../../../model/paths";

export const conversationPaths: { [key: string]: string } = {
    John: conversationWithJohnPath,
    Barbara: conversationWithBarbaraPath,
    LingLing: conversationWithLinglingPath
};

export const Contacts: React.FC<ContactsProps> = (props) => {
    return (
        <StyledContacts>
            {
                props.contacts.map((contact, idx) => {
                    return (
                        <Link key={idx}
                              to={conversationPaths[contact]}
                              onClick={() => props.dispatchStartConversation(contact)}
                        >
                            <StyledContact>
                                {contact}
                            </StyledContact>
                        </Link>
                    )
                })
            }
        </StyledContacts>
    )
}

