import {combineReducers} from "redux";
import {
    ComputerScreen,
    ComputerScreenHandlers,
    GuestSlot,
    GuestSlotHandlers,
    Workspace,
    WorkspaceHandlers
} from "./model/state";
import {
    CHANGE_PLAYER_NAME,
    CLOSE_PLAYER_NAME_INPUT,
    DELAY_WORK,
    END_CONVERSATION,
    INITIALIZE_CONVERSATIONS,
    ON_DRAG_START,
    ON_DROP,
    READY,
    REJECT,
    SHOW_ORDER_CHECK_RESULT,
    SHUFFLE_COLORS,
    START_CONVERSATION,
    START_WORK
} from "./actions";
import {getArrayOfShuffledColors} from "./helpers/colorsShuffler.helpers";
import {conversations} from "./conversations/conversations";

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
    contacts: ["John", "Barbara", "LingLing"],
    currentContact: "",
    currentEvent: "",
    conversations: {},
    currentConversationPhase: {
        event: "",
        npcName: "",
        npcDialogueOption: "",
        playerDialogueOptions: [
            {rpl: '', event: ''},
            {rpl: '', event: ''}
        ]
    },
    currentConversationHistory: [],
    conversationsHistory: {}
};

export const preloadedGuestSlotState: GuestSlot = {
    contacts: ["Mike", "Ella", "RandomDeveloper"],
    currentContact: "",
    currentEvent: "",
    conversations: {},
    currentConversationPhase: {
        event: "",
        npcName: "",
        npcDialogueOption: "",
        playerDialogueOptions: [
            {rpl: '', event: ''},
            {rpl: '', event: ''}
        ]
    },
    currentConversationHistory: [],
    conversationsHistory: {}
};

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
                [DELAY_WORK]: function (): ComputerScreen {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state}
                    )
                },
                [START_WORK]: function (): ComputerScreen {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                            {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state}
                    )
                },
                [REJECT]: function (): ComputerScreen {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state})
                },
                [READY]: function (): ComputerScreen {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact]?.concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }


                    }
                    :
                            {...state})
                },
                [END_CONVERSATION]: function (): ComputerScreen {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact]?.concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }

                    }
                    :
                            {...state}
                    )
                },
                [START_CONVERSATION]: function (): ComputerScreen {

                    return (
                        state.contacts.includes(action.payload.contact)
                            ?
                            {
                        ...state,
                        currentContact: action.payload.contact,
                        currentEvent: action.payload.event,
                        currentConversationPhase: (
                            (state.conversationsHistory[action.payload.contact])?.length
                                ?
                                state.conversationsHistory[action.payload.contact][state.conversationsHistory[action.payload.contact]?.length - 1]
                                :
                                state.conversations[action.payload.contact].find(phase => phase.event === action.payload.event) || state.conversations[action.payload.contact][0]
                        ),
                        conversationsHistory: (
                            (state.conversationsHistory[action.payload.contact])?.length
                                ?
                                {
                                    ...state.conversationsHistory,
                                }
                                :
                                {
                                    ...state.conversationsHistory,
                                    [action.payload.contact]: [(state.conversations[action.payload.contact].find(phase => phase.event === action.payload.event) || state.conversations[action.payload.contact][0])]
                                }

                        )
                    }
                    :
                            {...state}
                    )
                },
                [INITIALIZE_CONVERSATIONS]: function (): ComputerScreen {
                    return ({
                        ...state,
                        conversations: (state.contacts
                            .map((contact: string) => ({[contact]: conversations[contact]})))
                            .reduce(
                                (acc, x) => {
                                    return {...acc, ...x}
                                },
                                {}
                            )
                    })                },
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
        guestSlot: function (state: GuestSlot = preloadedGuestSlotState, action) {
            const guestSlotHandlers: GuestSlotHandlers = {
                [DELAY_WORK]: function (): GuestSlot {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state})
                },
                [START_WORK]: function (): GuestSlot {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state})
                },
                [REJECT]: function (): GuestSlot {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact].concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }
                    }
                    :
                            {...state})
                },
                [READY]: function (): GuestSlot {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact]?.concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }


                    }
                    :
                            {...state})
                },
                [END_CONVERSATION]: function (): GuestSlot {
                    return (
                        state.contacts.includes(state.currentContact)
                            ?
                        {
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.conversationsHistory[state.currentContact]?.concat(state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase)
                            }

                    }
                    :
                            {...state}
                    )
                },
                [START_CONVERSATION]: function (): GuestSlot {

                    return (
                        state.contacts.includes(action.payload.contact)
                            ?
                        {
                        ...state,
                        currentContact: action.payload.contact,
                        currentEvent: action.payload.event,
                        currentConversationPhase: (
                            (state.conversationsHistory[action.payload.contact])?.length
                                ?
                                state.conversationsHistory[action.payload.contact][state.conversationsHistory[action.payload.contact]?.length - 1]
                                :
                                state.conversations[action.payload.contact].find(phase => phase.event === action.payload.event) || state.conversations[action.payload.contact][0]
                        ),

                        conversationsHistory:
                            state.contacts.includes(action.payload.contact)
                                ?
                            (
                            (state.conversationsHistory[action.payload.contact])?.length
                                ?
                                {
                                    ...state.conversationsHistory,
                                }
                                :
                                {
                                    ...state.conversationsHistory,
                                    [action.payload.contact]: [(state.conversations[action.payload.contact].find(phase => phase.event === action.payload.event) || state.conversations[action.payload.contact][0])]
                                }

                        )
                                :
                                state.conversationsHistory
                    }
                    :
                            {...state})
                },
                [INITIALIZE_CONVERSATIONS]: function (): GuestSlot {

                    return ({
                        ...state,
                        conversations: (state.contacts
                            .map((contact: string) => ({[contact]: conversations[contact]})))
                            .reduce(
                                (acc, x) => {
                                    return {...acc, ...x}
                                },
                                {}
                            )
                    })
                },
            }
            return (
                guestSlotHandlers[action.type]
                    ? guestSlotHandlers[action.type]()
                    : state)

        }
    }
);

// ....reduce((acc, x)  {...acc, ...x } , {}),
// const arr = [{a: "jajo"}, {a: "dupa"}];
//
//
// arr.reduce((acc, currentValue) => {
//     return {
//         ...acc,
//         ...currentValue
//     };
// }, {});