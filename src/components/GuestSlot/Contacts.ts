import {connect} from "react-redux";
import {Dispatch} from "redux";
import {startConversation} from "../../actions";
import {AppState} from "../../model/state";
import {Contacts} from "../common/Contacts/Contacts.layout";
import {ContactsDispatchProps, ContactsStateProps} from "../common/Contacts/Contacts.types";


function mapStateToProps(state: AppState): ContactsStateProps {
    return {
        contacts: state.guestSlot.contacts,
        conversations: state.guestSlot.conversations,
        currentConversationPhase: state.guestSlot.currentConversationPhase,
        conversationsHistory: state.guestSlot.conversationsHistory,
    }
}

function mapDispatchToProps(dispatch: Dispatch): ContactsDispatchProps {
    return {

        dispatchStartConversation: function (contact, event) {
            return dispatch(startConversation(contact, event))
    }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);