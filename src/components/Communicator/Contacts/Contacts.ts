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
        currentConversationPhase: state.computerScreen.currentConversationPhase
    }
}

function mapDispatchToProps(dispatch: Dispatch): ContactsDispatchProps {
    return {

        dispatchStartConversation: function (contact) {
            return dispatch(startConversation(contact))
    }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);