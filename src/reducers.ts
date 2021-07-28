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
    CLOSE_PLAYER_NAME_INPUT, CLOSE_VISIT,
    DELAY_WORK, DELAY_WORK_VISIT,
    END_CONVERSATION, END_VISIT,
    INITIALIZE_CONVERSATIONS,
    INITIALIZE_VISIT,
    ON_DRAG_START,
    ON_DROP,
    READY, READY_VISIT,
    REJECT, REJECT_VISIT,
    SHOW_ORDER_CHECK_RESULT,
    SHUFFLE_COLORS,
    START_CONVERSATION,
    START_VISIT,
    START_WORK, START_WORK_VISIT
} from "./actions";
import {getArrayOfShuffledColors} from "./helpers/colorsShuffler.helpers";
import {conversations} from "./conversations/conversations";
import {visits} from "./visits/visits";
//
// export const preloadedWorkspaceState: Workspace = {
//     isOverlayVisible: true,
//     playerName: "",
//     isPlayerNameInputVisible: true,
//     isPlayerNameVisible: false
// };

export const preloadedWorkspaceState: Workspace = {
    isOverlayVisible: false,
    playerName: "d",
    isPlayerNameInputVisible: false,
    isPlayerNameVisible: true
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
    guests: ["Mike", "Ella", "RandomDeveloper"],
    currentGuest: "",
    currentEvent: "",
    visits: {},
    currentVisitPhase: {
        event: "",
        npcName: "",
        npcDialogueOption: "",
        playerDialogueOptions: [
            {rpl: '', event: ''},
            {rpl: '', event: ''}
        ]
    },
    currentVisitHistory: [],
    visitsHistory: {}
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
        guestSlot: function (state: GuestSlot = preloadedGuestSlotState, action) {
            const guestSlotHandlers: GuestSlotHandlers = {
            [CLOSE_VISIT] : function (): GuestSlot {
                return {
                    ...state,
                    currentEvent: ""
                }
            },
                [DELAY_WORK_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest].concat(state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase)
                                    }
                            }
                            :
                            {...state})
                },
                [START_WORK_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest].concat(state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase)
                                    }
                            }
                            :
                            {...state})
                },
                [REJECT_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest].concat(state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase)
                                    }
                            }
                            :
                            {...state})
                },
                [READY_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest]?.concat(state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase)
                                    }


                            }
                            :
                            {...state})
                },
                [END_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest]?.concat(state.visits[state.currentGuest].find(phase => phase.event === action.payload) || state.currentVisitPhase)
                                    }

                            }
                            :
                            {...state}
                    )
                },
                [START_VISIT]: function (): GuestSlot {

                    return (
                        state.guests.includes(action.payload.guest)
                            ?
                            {
                                ...state,
                                currentGuest: action.payload.guest,
                                currentEvent: action.payload.event,
                                currentVisitPhase: (
                                    (state.visitsHistory[action.payload.guest])?.length
                                        ?
                                        state.visitsHistory[action.payload.guest][state.visitsHistory[action.payload.guest]?.length - 1]
                                        :
                                        state.visits[action.payload.guest].find(phase => phase.event === action.payload.event) || state.visits[action.payload.guest][0]
                                ),

                                visitsHistory:
                                    state.guests.includes(action.payload.guest)
                                        ?
                                        (
                                            (state.visitsHistory[action.payload.guest])?.length
                                                ?
                                                {
                                                    ...state.visitsHistory,
                                                }
                                                :
                                                {
                                                    ...state.visitsHistory,
                                                    [action.payload.guest]: [(state.visits[action.payload.guest].find(phase => phase.event === action.payload.event) || state.visits[action.payload.guest][0])]
                                                }

                                        )
                                        :
                                        state.visitsHistory
                            }
                            :
                            {...state})
                },
                [INITIALIZE_VISIT]: function (): GuestSlot {

                    return ({
                        ...state,
                        visits: (state.guests
                            .map((guest: string) => ({[guest]: visits[guest]})))
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