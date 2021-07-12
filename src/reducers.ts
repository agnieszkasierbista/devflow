import {combineReducers} from "redux";
import {ComputerScreen, ComputerScreenHandlers, GuestSlot, Workspace, WorkspaceHandlers} from "./model/state";
import {
    CHANGE_PLAYER_NAME,
    CLOSE_PLAYER_NAME_INPUT,
    END_CONVERSATION,
    INITIALIZE_CONVERSATION,
    ON_DRAG_START,
    ON_DROP,
    SHOW_ORDER_CHECK_RESULT,
    SHUFFLE_COLORS,
    START_CONVERSATION
} from "./actions";
import {getArrayOfShuffledColors} from "./helpers/colorsShuffler.helpers";
import {conversations} from "./conversations/conversations";
import {conversationWithJohn} from "./conversations/conversationWithJohn";

export const phase0 =
    {
        events: "",
        npcName: "",
        dialogueOption: "",
        player: [
            {rpl: '', event: ''},
            {rpl: '', event: ''}
        ]
    };

export const preloadedWorkspaceState: Workspace = {
    isOverlayVisible: true,
    playerName: "",
    isPlayerNameInputVisible: true,
    isPlayerNameVisible: false
};

export const preloadedComputerScreenState: ComputerScreen = {
    randomColors: ["red", "blue", "purple", "green", "yellow", "orange", "pink"],
    puzzle: {
        items: ["a", "b", "c", "d", "e"],
        shuffledItems: ["b", "a", "c", "e", "d"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
    },
    codeEditorTabsList: ["config.file", "index.file", "main.file"],
    openedFiles: ["aaaaaaaaaaaaaaaaaaa", "bbbbbb", "dddddddddddddddddd"],
    contacts: ["John", "Barbara", "Lingling"],
    conversation: {
        phase: phase0
    },
};

export const preloadedGuestSlotState: GuestSlot = {};

export const rootReducer = combineReducers({
        workspace: function (state: Workspace = preloadedWorkspaceState, action) {

            const workspaceHandlers: WorkspaceHandlers = {
                [CHANGE_PLAYER_NAME]: function () {
                    return ({
                        ...state,
                        playerName: action.payload
                    })
                },
                [CLOSE_PLAYER_NAME_INPUT]: function () {
                    return ({
                        ...state,
                        isPlayerNameInputVisible: false,
                        isOverlayVisible: false,
                        isPlayerNameVisible: true
                    })
                }
            }

            return (
                workspaceHandlers[action.type]
                    ? workspaceHandlers[action.type]()
                    : state
            )
        },
        computerScreen: function (state: ComputerScreen = preloadedComputerScreenState, action) {
            const computerScreenHandlers: ComputerScreenHandlers = {
                [END_CONVERSATION]: function (): ComputerScreen {
                    return ({
                        ...state,
                        conversation: {
                            ...state.conversation,
                            phase: phase0
                        }

                    })
                },
                [START_CONVERSATION]: function (): ComputerScreen {
                    return ({
                        ...state,
                        conversation: {
                            ...state.conversation,
                            phase: {
                                ...conversationWithJohn.phase2
                            }
                        }
                    })
                },
                [INITIALIZE_CONVERSATION]: function (): ComputerScreen {
                    return ({
                        ...state,
                        conversation: {
                            phase: conversationWithJohn.phase1

                        }
                    })
                },
                [SHUFFLE_COLORS]: function (): ComputerScreen {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            colors: getArrayOfShuffledColors(state.puzzle.items, state.randomColors)
                        }
                    })
                },
                [ON_DRAG_START]: function (): ComputerScreen {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            beingDragged: action.payload,
                            shouldShowOrderCheckResult: false
                        }
                    })
                },
                [ON_DROP]: function (): ComputerScreen {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            shuffledItems: action.payload
                        }
                    })
                },
                [SHOW_ORDER_CHECK_RESULT]: function (): ComputerScreen {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            shouldShowOrderCheckResult: true
                        }
                    })
                },
            }
            return (
                computerScreenHandlers[action.type]
                    ? computerScreenHandlers[action.type]()
                    : state)
        },
        guestSlot: function (state = preloadedGuestSlotState, action) {

            return state;
        }
    }
);