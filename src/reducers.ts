import {combineReducers} from "redux";
import {ComputerScreen, ComputerScreenHandlers, GuestSlot, Workspace, WorkspaceHandlers} from "./model/state";
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
                [DELAY_WORK]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        currentConversationHistory: state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        ),
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.currentConversationHistory.concat(
                                    [
                                        (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                        ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || ''),
                                        (state.currentContact + ": " + state.conversations[state.currentContact].find((phase) => (phase.event) === action.payload)?.npcDialogueOption || '')
                                    ].filter((x) => x)
                                )
                            }


                    })
                },
                [START_WORK]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        currentConversationHistory: state.currentConversationHistory[state.currentConversationHistory.length - 1] === (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption)
                            ?
                            state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        )
                            :
                            state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        ),
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.currentConversationHistory.concat(
                                    [
                                        (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                        ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || ''),
                                        (state.currentContact + ": " + state.conversations[state.currentContact].find((phase) => (phase.event) === action.payload)?.npcDialogueOption || '')
                                    ].filter((x) => x)
                                )
                            }

                    })
                },
                [REJECT]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        currentConversationHistory: state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        ),
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.currentConversationHistory.concat(
                                    [
                                        (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                        ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || ''),
                                        (state.currentContact + ": " + state.conversations[state.currentContact].find((phase) => (phase.event) === action.payload)?.npcDialogueOption || '')
                                    ].filter((x) => x)
                                )
                            }

                    })
                },
                [READY]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        currentConversationHistory: state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        ),
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.currentConversationHistory.concat(
                                    [
                                        (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                        ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || ''),
                                        (state.currentContact + ": " + state.conversations[state.currentContact].find((phase) => (phase.event) === action.payload)?.npcDialogueOption || '')
                                    ].filter((x) => x)
                                )
                            }


                    })
                },
                [END_CONVERSATION]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentConversationPhase: state.conversations[state.currentContact].find(phase => phase.event === action.payload) || state.currentConversationPhase,
                        currentConversationHistory: state.currentConversationHistory.concat(
                            [
                                (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || '')
                            ].filter((x) => x)
                        ),
                        conversationsHistory:
                            {
                                ...state.conversationsHistory,
                                [state.currentContact]: state.currentConversationHistory.concat(
                                    [
                                        (state.currentContact + ": " + state.currentConversationPhase.npcDialogueOption),
                                        ("Me: " + state.currentConversationPhase.playerDialogueOptions.find((option) => (option.event === action.payload))?.rpl || ''),
                                        (state.currentContact + ": " + state.conversations[state.currentContact].find((phase) => (phase.event) === action.payload)?.npcDialogueOption || '')
                                    ].filter((x) => x)
                                )
                            }
                    })
                },
                [START_CONVERSATION]: function (): ComputerScreen {

                    function isEmpty(obj: {}) {
                        for (const key in obj) {
                            if (obj.hasOwnProperty(key))
                                return false;
                        }
                        return true;
                    }

                    return ({
                        ...state,
                        currentContact: action.payload,
                        currentConversationPhase:
                            !isEmpty(state.conversationsHistory)
                                ? (state.conversationsHistory[action.payload]
                                    ? (state.conversations[action.payload]
                                            .find(
                                                (phase) => (
                                                    ([action.payload] + ": " + phase.npcDialogueOption) ===
                                                    state.conversationsHistory[action.payload][state.conversationsHistory[action.payload].length - 1]
                                                )
                                            )
                                    ) || state.conversations[action.payload][0]
                                    : state.conversations[action.payload][0]
                                )
                                : state.conversations[action.payload][0],

                        currentConversationHistory: state.conversationsHistory[action.payload]
                            ? state.conversationsHistory[action.payload]
                            : []

                    })
                },
                [INITIALIZE_CONVERSATIONS]: function (): ComputerScreen {
                    return ({
                        ...state,
                        conversations: conversations,
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