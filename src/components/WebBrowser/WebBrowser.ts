import { connect } from "react-redux";
import {WebBrowser} from "./WebBrowser.layout";
import {WebBrowserStateProps} from "./WebBrowser.types";
import {AppState} from "../../model/state";


function mapStateToProps(state: AppState): WebBrowserStateProps {
    return {}
}

export default connect(mapStateToProps)(WebBrowser);