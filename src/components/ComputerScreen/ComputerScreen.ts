import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../model/state";
import {ComputerScreen} from "./ComputerScreen.layout";
import {ComputerScreenDispatchProps, ComputerScreenStateProps} from "./ComputerScreen.types";
import {setComputerScreenInitialInfo} from "../../actions";

function mapStateToProps(state: AppState): ComputerScreenStateProps {
    return {}
}

function mapDispatchToProps(dispatch: Dispatch): ComputerScreenDispatchProps {
    return {
        dispatchSetComputerScreenInitialInfo: function () {
            return dispatch(setComputerScreenInitialInfo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComputerScreen);