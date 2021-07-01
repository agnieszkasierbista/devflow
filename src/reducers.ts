import {combineReducers} from "redux";
import {ComputerScreen, Workspace, GuestSlot, WorkspaceHandlers} from "./model/state";
import {CHANGE_PLAYER_NAME, CLOSE_PLAYER_NAME_INPUT} from "./actions";


export const preloadedWorkspaceState: Workspace = {
    isOverlayVisible: true,
    playerName: "",
    isPlayerNameInputVisible: true,
    isPlayerNameVisible: false
};

export const preloadedComputerScreenState: ComputerScreen = {};

export const preloadedGuestSlotState: GuestSlot = {};

export const rootReducer = combineReducers({
        workspace: function (state: Workspace = preloadedWorkspaceState, action) {

            const workspaceHandlers: WorkspaceHandlers = {
                [CHANGE_PLAYER_NAME]: function() {
                    return ({
                        ...state,
                        playerName: action.payload
                    })
                },
                [CLOSE_PLAYER_NAME_INPUT]: function() {
                    return ({
                        ...state,
                        isPlayerNameInputVisible: false,
                        isOverlayVisible: false,
                        isPlayerNameVisible: true
                    })
                }
            }

            return workspaceHandlers[action.type] ? workspaceHandlers[action.type]() : state
        },
        computerScreen: function (state = preloadedComputerScreenState, action) {

            return state
        },
        guestSlot: function (state = preloadedGuestSlotState, action) {

            return state;
        },
    }
);