import {ContactsProps} from "./Contacts.types";
import React from "react";
import {StyledContact, StyledContacts} from "./Contacts.styled";
import {Link} from "react-router-dom";
import {
    conversationWithBarbaraPath,
    conversationWithJohnPath,
    conversationWithLinglingPath,
    conversationWithEllaPath,
    conversationWithMikePath,
    conversationWithRandomDeveloperPath
} from "../../../model/paths";
import {isEmpty} from "../../../helpers/isEmpty";

export const conversationPaths: { [key: string]: string } = {
    John: conversationWithJohnPath,
    Barbara: conversationWithBarbaraPath,
    LingLing: conversationWithLinglingPath,
    Mike: conversationWithMikePath,
    Ella: conversationWithEllaPath,
    RandomDeveloper: conversationWithRandomDeveloperPath
};

export const Contacts: React.FC<ContactsProps> = (props) => {

    return (
        <StyledContacts>
            {
                props.contacts.map((contact, idx) => {

                    function eventFinder(contact: string): string {
                        const event = (
                            !isEmpty(props.conversationsHistory)
                                ?
                                !isEmpty(props.conversationsHistory.contact)
                                    ?
                                    props.conversationsHistory.contact[props.conversationsHistory.contact.length - 1].event
                                    :
                                    "START_CONVERSATION"
                                :
                                "START_CONVERSATION"
                        )

                        return event
                    }

                    return (
                        <Link key={idx}
                              to={conversationPaths[contact]}
                              onClick={() => props.dispatchStartConversation(contact, eventFinder(contact))}
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
