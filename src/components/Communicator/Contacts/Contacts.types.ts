export interface ContactsProps extends ContactsOwnProps,
    ContactsStateProps,
    ContactsDispatchProps {
}

export interface ContactsOwnProps {

}

type Contact = string;

export interface ContactsStateProps {
    contacts: Contact[],
}

export interface ContactsDispatchProps {

}