import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../model/state";
import {Contacts} from "./Contacts.layout";
import {ContactsDispatchProps, ContactsStateProps} from "./Contacts.types";


function mapStateToProps(state: AppState): ContactsStateProps {
    return {
        contacts: state.computerScreen.contacts,
    }
}

function mapDispatchToProps(dispatch: Dispatch): ContactsDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);