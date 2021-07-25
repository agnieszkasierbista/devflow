import {connect} from "react-redux";
import {Dispatch} from "redux";
import {startConversation} from "../../../actions";
import {AppState} from "../../../model/state";
import {Contacts} from "./Contacts.layout";
import {ContactsDispatchProps, ContactsStateProps} from "./Contacts.types";


function mapStateToProps(state: AppState): ContactsStateProps {
    return {
        contacts: state.computerScreen.contacts,
        conversations: state.computerScreen.conversations,
        currentConversationPhase: state.computerScreen.currentConversationPhase,
        conversationsHistory: state.computerScreen.conversationsHistory,
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