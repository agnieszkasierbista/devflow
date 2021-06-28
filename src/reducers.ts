import {combineReducers} from "redux";
import {ComputerScreen, Workspace, GuestSlot} from "./model/state";


export const preloadedWorkspaceState: Workspace = {
    isOverlayVisible: true,
    playersName: "",
    isPlayerNameInputVisible: true
};

export const preloadedComputerScreenState: ComputerScreen = {};

export const preloadedGuestSlotState: GuestSlot = {};

export const rootReducer = combineReducers({
        workspace: function (state = preloadedWorkspaceState) {

            return state
        },
        computerScreen: function (state = preloadedComputerScreenState, action) {

            return state
        },
        guestSlot: function (state = preloadedGuestSlotState, action) {

            return state;
        },
    }
);