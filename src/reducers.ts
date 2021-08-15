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
    CHECK_MATCHED_PAIRS,
    CLICK_OFF_LEFT,
    CLICK_OFF_RIGHT,
    CLICK_ON_LEFT,
    CLICK_ON_RIGHT,
    CLOSE_PLAYER_NAME_INPUT,
    CLOSE_VISIT,
    DELAY_WORK,
    DELAY_WORK_VISIT,
    END_CONVERSATION,
    END_VISIT,
    INITIALIZE_CONVERSATIONS,
    INITIALIZE_VISIT,
    ON_CARD_DROP,
    ON_DRAG_CARD_START,
    ON_DRAG_START,
    ON_DRAG_START_FILES,
    ON_DROP,
    ON_DROP_FILES,
    READY,
    READY_VISIT,
    REJECT,
    REJECT_VISIT,
    SET_CURRENT_FILE,
    SHOW_ORDER_CHECK_RESULT,
    SHOW_ORDER_CHECK_RESULT_FILES,
    SHUFFLE_ALL_ITEMS,
    SHUFFLE_COLORS,
    SHUFFLE_COLORS_FILES,
    START_CONVERSATION,
    START_VISIT,
    START_WORK,
    START_WORK_VISIT
} from "./actions";
import {getArrayOfShuffledColors} from "./helpers/colorsShuffler.helpers";
import {conversations} from "./conversations/conversations";
import {visits} from "./visits/visits";
import {files} from "./tasksSourceFiles/files";
import {shuffleArrayItems} from "./helpers/itemsShuffler.helpers";
import * as R from "ramda";
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
    currentFile: {
        fileName: "",
        items: [],
        shuffledItems: [],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: ""
    },
    files: [],
    codeEditorTabsList: ["config.file", "index.file", "main.file"],
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
    conversationsHistory: {},
    isDivClicked: [],
    clickedDivCurrentStateLeft: "CLICK_OFF_LEFT",
    clickedDivCurrentStateRight: "CLICK_OFF_RIGHT",
    columnLeft: [],
    columnRight: [],
    columnLeftClicked: [],
    columnRightClicked: [],
    currentDivColor: ["", "", "", "", "", "", "", "", "g"],
    webBrowserTabsList: ["Task", "Scrum Board", "Funny Kittens"],
    itemId: "",
    scrumBoardCurrentShuffledItems: []
};

export const preloadedGuestSlotState: GuestSlot = {
    randomColors: ["red", "blue", "purple", "green", "yellow", "orange", "pink"],
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
                [ON_DRAG_CARD_START]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
                            beingDragged: action.payload,
                        }
                    })

                },
                [ON_CARD_DROP]: function (): ComputerScreen {
                    return {
                        ...state,
                        currentFile: {
                            ...state.currentFile,
                            // @ts-ignore
                            shuffledItems: R.update(action.payload.rowIdx, action.payload.swappedItems, state.currentFile.shuffledItems),
                        },
                        // @ts-ignore
                        scrumBoardCurrentShuffledItems: R.update(action.payload.rowIdx, action.payload.swappedItems, state.scrumBoardCurrentShuffledItems),
                    }
                },
                [SHUFFLE_ALL_ITEMS]: function (): ComputerScreen {
                    return (
                        {
                            ...state,
                            columnLeft: shuffleArrayItems(action.payload.map((item: string[]) => item[0])),
                            columnRight: shuffleArrayItems(action.payload.map((item: string[]) => item[1])),
                            isDivClicked: state.currentFile.items.flat().map(item => ({[item]: false}))

                        }
                    )
                },
                [CLICK_ON_LEFT]: function (): ComputerScreen {
                    return (
                        {
                            ...state,
                            currentFile: ({
                                ...state.currentFile,
                                colors: {
                                    [action.payload.val]: action.payload.color
                                }
                            }),
                            isDivClicked: state.isDivClicked.map((div) => {
                                if (Reflect.has(div, action.payload.val)) {
                                    return {[action.payload.val]: true}
                                } else {
                                    return div
                                }
                            }),
                            clickedDivCurrentStateLeft: (
                                state.isDivClicked.find((div) => div === {[action.payload.val]: true})
                                    ?
                                    CLICK_OFF_LEFT
                                    :
                                    CLICK_ON_LEFT
                            ),
                            columnLeftClicked: state.columnLeftClicked.concat(action.payload.val)
                        }
                    )
                },
                [CLICK_OFF_LEFT]: function (): ComputerScreen {
                    return (
                        {
                            ...state,
                            currentFile: ({
                                ...state.currentFile,
                                colors: {}
                            }),
                            isDivClicked: state.isDivClicked.map((div) => {
                                if (Reflect.has(div, action.payload.val)) {
                                    return {[action.payload.val]: false}
                                } else {
                                    return div
                                }
                            }),
                            clickedDivCurrentStateLeft: (
                                state.isDivClicked.find((div) => div === {[action.payload.val]: false})
                                    ?
                                    CLICK_ON_LEFT
                                    :
                                    CLICK_OFF_LEFT
                            ),
                            columnLeftClicked: R.without(action.payload.val, state.columnLeftClicked)
                        }
                    )
                },
                [CLICK_ON_RIGHT]: function (): ComputerScreen {

                    return (
                        {
                            ...state,
                            currentDivColor: R.update(action.payload.rightColumnIndex, action.payload.color, state.currentDivColor),
                            currentFile: ({
                                ...state.currentFile,
                            }),
                            isDivClicked: state.isDivClicked.map((div) => {
                                if (Reflect.has(div, action.payload.val)) {
                                    return {[action.payload.val]: true}
                                } else {
                                    return div
                                }
                            }),
                            //TO-DO: popraw!!!!
                            clickedDivCurrentStateRight: CLICK_ON_RIGHT,
                            columnRightClicked: state.columnRightClicked.concat(action.payload.val),

                        }
                    )
                },
                [CLICK_OFF_RIGHT]: function (): ComputerScreen {
                    return (
                        {
                            ...state,
                            currentDivColor: R.update(action.payload.rightColumnIndex, "", state.currentDivColor),
                            currentFile: ({
                                ...state.currentFile,
                                colors: {
                                    [action.payload.val]: action.payload.color
                                }
                            }),
                            isDivClicked: state.isDivClicked.map((div) => {
                                if (Reflect.has(div, action.payload.val)) {
                                    return {[action.payload.val]: false}
                                } else {
                                    return div
                                }
                            }),
                            clickedDivCurrentStateRight: CLICK_OFF_RIGHT,
                            columnRightClicked: R.without(action.payload.val, state.columnRightClicked)
                        }
                    )
                },
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
                [SHUFFLE_COLORS_FILES]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
                            colors: getArrayOfShuffledColors(state.currentFile.items.flatMap((x => x[0])), state.randomColors)
                        }
                    })
                },
                [SET_CURRENT_FILE]: function (): ComputerScreen {

                    const currentFileFound = files.find((file) => file.fileName === action.payload)

                    return ({
                        ...state,
                        currentFile: {
                            ...files.find((file) => file.fileName === action.payload) || files[0],
                            shuffledItems:

                                action.payload === "Scrum_Board"
                                    ?
                                    state.scrumBoardCurrentShuffledItems?.length
                                        ?
                                        state.scrumBoardCurrentShuffledItems
                                        :
                                        currentFileFound?.shuffledItems
                                    :
                                    currentFileFound?.shuffledItems


                        },
                        scrumBoardCurrentShuffledItems: state.scrumBoardCurrentShuffledItems?.length
                            ?
                            state.scrumBoardCurrentShuffledItems
                            :
                            currentFileFound?.shuffledItems
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
                [ON_DRAG_START_FILES]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
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
                [ON_DROP_FILES]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
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
                [SHOW_ORDER_CHECK_RESULT_FILES]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
                            shouldShowOrderCheckResult: true
                        }
                    })
                },
                [CHECK_MATCHED_PAIRS]: function (): ComputerScreen {
                    return ({
                        ...state,
                        currentFile: {
                            ...state.currentFile,
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
                [CLOSE_VISIT]: function (): GuestSlot {
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