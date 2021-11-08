import {combineReducers} from "redux";
import {
    ComputerScreen,
    ComputerScreenHandlers, Conversations,
    CurrentFileHandlers,
    FileDragAndDrop,
    FileMemoryGame,
    FilePairMatching,
    FileScrumBoard,
    GuestSlot,
    GuestSlotHandlers,
    Workspace
} from "./model/state";
import {
    CHANGE_PLAYER_NAME,
    CHECK_MATCHED_PAIRS, CLEAR_DRAG_AND_DROP_BOARD_AND_ADD_GAME_NAME_TO_FINISHED,
    CLEAR_MEMORY_GAME_BOARD_AND_ADD_GAME_NAME_TO_FINISHED,
    CLICK_OFF_LEFT,
    CLICK_OFF_RIGHT,
    CLICK_ON_LEFT,
    CLICK_ON_RIGHT,
    CLOSE_PLAYER_NAME_INPUT,
    CLOSE_VISIT,
    DELAY_WORK,
    DELAY_WORK_VISIT,
    END_CONVERSATION,
    END_VISIT, GIVE_POINTS,
    HIDE_ORDER_CHECK_RESULT,
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
    RESTART_GAME,
    SET_COMPUTER_SCREEN_INITIAL_INFO,
    SET_CURRENT_FILE,
    SET_TOGGLE_STATE_TO_FALSE,
    SHOW_ORDER_CHECK_RESULT,
    SHOW_ORDER_CHECK_RESULT_FILES,
    SHUFFLE_ALL_ITEMS,
    SHUFFLE_COLORS,
    SHUFFLE_COLORS_DRAG_AND_DROP,
    SHUFFLE_COLORS_PAIR_MATCHING,
    START_CONVERSATION, START_COUNTING_GAME_TIME,
    START_VISIT,
    START_WORK,
    START_WORK_VISIT,
    TOGGLE_CARD,
    UPDATE_TIMER
} from "./actions";
import {getArrayOfShuffledColors} from "./helpers/colorsShuffler.helpers";
import {conversations} from "./conversations/conversations";
import {getVisits} from "./visits/getVisits";
import {shuffleArrayItems} from "./helpers/itemsShuffler.helpers";
import * as R from "ramda";
import {files} from "./tasksSourceFiles/files";
import {arrayDiff} from "./helpers/arrayDiff.helpers";
import {filesMemoryGame} from "./tasksSourceFiles/filesMemoryGame";
import {filesDragAndDrop} from "./tasksSourceFiles/filesDragAndDrop";
import {filesPairMatching} from "./tasksSourceFiles/filesPairMatching";
import {filesScrumBoard} from "./tasksSourceFiles/filesScrumBoard";

export const preloadedWorkspaceState: Workspace = {
    isOverlayVisible: true,
    playerName: "",
    isPlayerNameInputVisible: true,
    isPlayerNameVisible: false,
    timer: 0,
    timerStartingPoint: 0,
};
//
// export const preloadedWorkspaceState: Workspace = {
//     isOverlayVisible: false,
//     playerName: "d",
//     isPlayerNameInputVisible: false,
//     isPlayerNameVisible: true
// };

export const preloadedComputerScreenState: ComputerScreen = {
    randomColors: ["red", "blue", "purple", "green", "yellow",
        "orange", "pink", "magenta", "skyblue", "lightgrey",
        "darkmagenta", "peachpuff", "violet", "purple", "white", "lightcoral", "coral",
        "turquoise", "darkgreen"],
    puzzle: {
        fileName: "",
        items: [],
        shuffledItems: [],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "",
        path: "",
        component: ""
    },
    currentFilePuzzle: {
        fileName: "",
        items: ["a", "b", "c", "d", "e"],
        shuffledItems: ["b", "a", "c", "e", "d"],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        taskType: "",
        path: "",
        component: ""

    },
    filesScrumBoard: {
        fileName: "",
        itemsArray: [],
        shuffledItemsArray: [],
        beingDragged: -1,
        taskType: "",
        path: "",
        component: ""

    },
    currentFileScrumBoard: {
        fileName: "",
        itemsArray: [],
        shuffledItemsArray: [],
        beingDragged: -1,
        taskType: "",
        path: "",
        component: ""

    },
    filesMemoryGame: {
        fileName: "",
        taskType: "",
        items: [],
        shuffledItems: [],
        path: "",
        component: ""

    },
    currentFileMemoryGame: {
        fileName: "",
        taskType: "",
        items: [],
        shuffledItems: [],
        path: "",
        component: ""

    },
    filesPairMatching: {
        fileName: "",
        taskType: "",
        itemsArray: [],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        path: "",
        component: ""

    },
    currentFilePairMatching: {
        fileName: "",
        taskType: "",
        itemsArray: [],
        colors: {},
        beingDragged: -1,
        shouldShowOrderCheckResult: false,
        path: "",
        component: ""

    },
    files: [],
    codeEditorTabsList: [],
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
    columnLeft: [],
    columnRight: [],
    columnLeftClicked: [],
    columnRightClicked: [],
    currentDivColor: ["", "", "", "", "", "", "", "", "g"],
    webBrowserTabsList: [],
    itemId: "",
    scrumBoardCurrentShuffledItems: [],
    memoryGameCardToggleState: [],
    clicksCounter: 0,
    clicksCounterDragAndDrop: 0,
    finishedGameNames: [],
    pairMatchingStartTime: 0,
    pairMatchingEndTime: 0,
    points: 0
};

export const preloadedGuestSlotState: GuestSlot = {
    randomColors: ["red", "blue", "purple", "green", "yellow", "orange", "pink"],
    guests: [],
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


const getDialoguePhase = (dialogueHistory: Conversations, personsName: string, dialogues: Conversations, event: string) =>
    (
        (dialogueHistory[personsName])?.length
            ?
            dialogueHistory[personsName][dialogueHistory[personsName]?.length - 1]
            :
            dialogues[personsName]
                .find((phase) => phase.event === event)
            || dialogues[personsName][0]
    );

// const qwe = getDialoguePhase("visitsHistory", "guest", "visits")
//
// const erer = getDialoguePhase("conversationsHistory", "contact", "conversations")

const updateDialogueHistory = (dialogueHistory: Conversations, personsName: string, dialogues: Conversations, event: string) =>
    (
        (dialogueHistory[personsName])?.length
            ?
            {...dialogueHistory}
            :
            {
                ...dialogueHistory,
                [personsName]: [(dialogues[personsName]
                        .find((phase) => phase.event === event)
                    || dialogues[personsName][0])]
            }
    );

// const poi = updateDialogueHistory("visitsHistory", "guest", "visits")
// const ty = updateDialogueHistory("conversationsHistory", "contact", "conversations")

type WorkspaceChangePlayerNameActionType = { type: typeof CHANGE_PLAYER_NAME, payload: string }
type WorkspaceClosePlayerNameInputActionType = { type: typeof CLOSE_PLAYER_NAME_INPUT }
type WorkspaceUpdateTimerActionType = { type: typeof UPDATE_TIMER }

type WorkspaceActionsTypes =
    WorkspaceChangePlayerNameActionType
    | WorkspaceClosePlayerNameInputActionType
    | WorkspaceUpdateTimerActionType

export const rootReducer = combineReducers({
        workspace: function (state: Workspace = preloadedWorkspaceState, action: WorkspaceActionsTypes) {

            const workspaceHandlers = {
                [CHANGE_PLAYER_NAME]: function (action: WorkspaceChangePlayerNameActionType) {
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
                        isPlayerNameVisible: true,
                        timerStartingPoint: Date.now()
                    })
                },
                [UPDATE_TIMER]: function () {
                    return ({
                        ...state,
                        timer: Date.now() - state.timerStartingPoint
                    })
                }
            }

            switch (action.type) {
                case CHANGE_PLAYER_NAME:
                    return workspaceHandlers[action.type](action);
                case CLOSE_PLAYER_NAME_INPUT:
                    return workspaceHandlers[action.type]();
                case UPDATE_TIMER:
                    return workspaceHandlers[action.type]();
                default:
                    return state;
            }
        },
        computerScreen: function (state: ComputerScreen = preloadedComputerScreenState, action) {

            function possiblyGetNextConversationPhase() {
                return (
                    state.contacts.includes(state.currentContact)
                        ?
                        {
                            ...state,
                            currentConversationPhase: state.conversations[state.currentContact]
                                    .find(phase => phase.event === action.payload)
                                || state.currentConversationPhase,
                            conversationsHistory:
                                {
                                    ...state.conversationsHistory,
                                    [state.currentContact]: state.conversationsHistory[state.currentContact]
                                        .concat(state.conversations[state.currentContact]
                                                .find(phase => phase.event === action.payload)
                                            || state.currentConversationPhase)
                                }
                        }
                        :
                        {...state}
                )
            }

            const computerScreenHandlers: ComputerScreenHandlers = {

                [SET_COMPUTER_SCREEN_INITIAL_INFO]: function () {
                    return ({
                        ...state,
                        files: files,
                        codeEditorTabsList: files
                            .filter((file) => file.fileName
                                .includes(".file"))
                            .map((file) => file.fileName),
                        webBrowserTabsList: files
                            .filter((file) => file.component
                                .includes("web-browser"))
                            .map((file) => file.fileName),
                    })

                },
                [START_COUNTING_GAME_TIME]: function () {
                    return ({
                        ...state,
                        pairMatchingStartTime: Date.now(),
                        currentFilePairMatching: {
                            ...state.currentFilePairMatching,
                            shouldShowOrderCheckResult: false
                        },
                        //TODO: rename
                        isDivClicked: state.isDivClicked?.map((item) => {
                            const itemKey = Object.keys(item)[0]
                            return (
                                {[itemKey]: false}
                            )
                        }),
                        columnRightClicked: [],
                        columnLeftClicked: [],
                    })
                },
                [GIVE_POINTS]: function () {
                    return ({
                        ...state,
                        points: state.points + 1,
                        currentFilePairMatching: {
                            ...state.currentFilePairMatching,
                            shouldShowOrderCheckResult: false
                        },
                        pairMatchingStartTime: 0,
                    })
                },
                [ON_DRAG_CARD_START]: function () {
                    return ({
                        ...state,
                        currentFileScrumBoard: {
                            ...state.currentFileScrumBoard,
                            beingDragged: action.payload,
                        }
                    })

                },
                [ON_CARD_DROP]: function () {
                    return {
                        ...state,
                        currentFileScrumBoard: {
                            ...state.currentFileScrumBoard,
                            shuffledItemsArray: R.update(
                                action.payload.rowIdx,
                                action.payload.swappedItems,
                                state.currentFileScrumBoard.shuffledItemsArray),
                        },
                        scrumBoardCurrentShuffledItems: R.update(
                            action.payload.rowIdx,
                            action.payload.swappedItems,
                            state.scrumBoardCurrentShuffledItems),
                    }
                },
                [SHUFFLE_ALL_ITEMS]: function () {
                    return (
                        {
                            ...state,
                            columnLeft: shuffleArrayItems(action.payload.map((item: string[]) => item[0])),
                            columnRight: shuffleArrayItems(action.payload.map((item: string[]) => item[1])),
                            isDivClicked: state.currentFilePairMatching.itemsArray.flat().map(item => ({[item]: false}))

                        }
                    )
                },
                [CLICK_ON_LEFT]: function () {
                    return (
                        {
                            ...state,
                            currentFilePairMatching: ({
                                ...state.currentFilePairMatching,
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
                [CLICK_OFF_LEFT]: function () {
                    return (
                        {
                            ...state,
                            currentFilePairMatching: ({
                                ...state.currentFilePairMatching,
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
                [CLICK_ON_RIGHT]: function () {

                    return (
                        {
                            ...state,
                            currentDivColor: R.update(
                                action.payload.rightColumnIndex,
                                action.payload.color,
                                state.currentDivColor),
                            currentFilePairMatching: ({
                                ...state.currentFilePairMatching,
                            }),
                            isDivClicked: state.isDivClicked.map((div) => {
                                if (Reflect.has(div, action.payload.val)) {
                                    return {[action.payload.val]: true}
                                } else {
                                    return div
                                }
                            }),
                            columnRightClicked: state.columnRightClicked.concat(action.payload.val),

                        }
                    )
                },
                [CLICK_OFF_RIGHT]: function () {
                    return (
                        {
                            ...state,
                            currentDivColor: R.update(
                                action.payload.rightColumnIndex,
                                "",
                                state.currentDivColor),
                            currentFilePairMatching: ({
                                ...state.currentFilePairMatching,
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
                            columnRightClicked: R.without(action.payload.val, state.columnRightClicked)
                        }
                    )
                },
                [DELAY_WORK]: possiblyGetNextConversationPhase,
                [START_WORK]: possiblyGetNextConversationPhase,
                [REJECT]: possiblyGetNextConversationPhase,
                [READY]: possiblyGetNextConversationPhase,
                [END_CONVERSATION]: possiblyGetNextConversationPhase,
                [START_CONVERSATION]: function () {

                    return (
                        state.contacts.includes(action.payload.contact)
                            ?
                            {
                                ...state,
                                currentContact: action.payload.contact,
                                currentEvent: action.payload.event,
                                currentConversationPhase: getDialoguePhase(
                                    state.conversationsHistory,
                                    action.payload.contact,
                                    state.conversations,
                                    action.payload.event),
                                conversationsHistory: (
                                    updateDialogueHistory(
                                        state.conversationsHistory,
                                        action.payload.contact,
                                        state.conversations,
                                        action.payload.event)
                                )
                            }
                            :
                            {...state}
                    )
                },
                [INITIALIZE_CONVERSATIONS]: function () {
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
                [SHUFFLE_COLORS]: function () {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            colors: getArrayOfShuffledColors(state.puzzle.items, state.randomColors)
                        }
                    })
                },
                [SHUFFLE_COLORS_DRAG_AND_DROP]: function () {
                    return ({
                        ...state,
                        currentFilePuzzle: {
                            ...state.currentFilePuzzle,
                            colors: getArrayOfShuffledColors(state.currentFilePuzzle.items, state.randomColors)
                        }
                    })
                },
                [SHUFFLE_COLORS_PAIR_MATCHING]: function () {
                    return ({
                        ...state,
                        currentFilePairMatching: {
                            ...state.currentFilePairMatching,
                            colors: getArrayOfShuffledColors(
                                state.currentFilePairMatching.itemsArray
                                    .flatMap((x => x[0])),
                                state.randomColors)
                        }
                    })
                },
                [SET_CURRENT_FILE]: function () {

                    const currentFileFound = files.filter((file) => file.fileName === action.payload)[0]
                    const currentFileFoundMemoryGame = filesMemoryGame.filter((file) => file.fileName === action.payload)[0]
                    const currentFileFoundPuzzle = filesDragAndDrop.filter((file) => file.fileName === action.payload)[0]
                    const currentFileFoundPairMatching = filesPairMatching.filter((file) => file.fileName === action.payload)[0]
                    const currentFileFoundScrumBoard = filesScrumBoard.filter((file) => file.fileName === action.payload)[0]

                    const currentFileMemoryGameShuffledItems = currentFileMemoryGameShuffledItemsHelper();

                    function currentFileMemoryGameShuffledItemsHelper() {
                        if (currentFileFound.taskType === "memoryGame" && 'items' in currentFileFound) {
                            return shuffleArrayItems(currentFileFound.items)
                        }
                        return []
                    }

                    const currentFilePuzzleFunction = function (): { [key: string]: FileDragAndDrop } {
                        return ({
                            currentFilePuzzle: {
                                ...currentFileFoundPuzzle,
                                colors: getArrayOfShuffledColors(state.currentFilePuzzle.items, state.randomColors)
                            }
                        })
                    }

                    const currentFileMemoryGameFunction = function (): { [key: string]: FileMemoryGame } {
                        return (
                            {
                                currentFileMemoryGame:
                                    state.memoryGameCardToggleState?.length
                                        ?

                                        {
                                            ...currentFileFoundMemoryGame,
                                            shuffledItems: state.memoryGameCardToggleState.map((item) => {
                                                return item.content
                                            })
                                        }
                                        :
                                        {
                                            ...currentFileFoundMemoryGame,
                                            shuffledItems: currentFileMemoryGameShuffledItems

                                        }

                            }
                        )
                    }

                    const currentFileHandlers: CurrentFileHandlers = {

                        "config.file": currentFilePuzzleFunction,
                        Task: currentFilePuzzleFunction,
                        "index.file": currentFilePuzzleFunction,
                        "main.file": function (): { [key: string]: FilePairMatching } {
                            return ({
                                currentFilePairMatching: {...currentFileFoundPairMatching}
                            })
                        },
                        "Scrum Board": function (): { [key: string]: FileScrumBoard } {
                            return ({
                                currentFileScrumBoard: {
                                    ...currentFileFoundScrumBoard,
                                    shuffledItemsArray: state.scrumBoardCurrentShuffledItems?.length
                                        ?
                                        state.scrumBoardCurrentShuffledItems
                                        :
                                        currentFileFoundScrumBoard.fileName === "Scrum Board"
                                            ? currentFileFoundScrumBoard?.shuffledItemsArray
                                            : state.scrumBoardCurrentShuffledItems,
                                }
                            })
                        },
                        "Funny Kittens": currentFileMemoryGameFunction,
                        "Funny Dogs": currentFileMemoryGameFunction,
                        "Funny Lizards": currentFileMemoryGameFunction,

                    };

                    return ({
                        ...state,
                        scrumBoardCurrentShuffledItems:
                            state.scrumBoardCurrentShuffledItems?.length
                                ? state.scrumBoardCurrentShuffledItems
                                : currentFileFound.fileName === "Scrum Board"
                                    ? currentFileFoundScrumBoard?.shuffledItemsArray
                                    : state.scrumBoardCurrentShuffledItems,
                        memoryGameCardToggleState:
                            (["Funny Kittens", "Funny Dogs", "Funny Lizards"].includes(action.payload))
                                ? state.memoryGameCardToggleState?.length
                                    ? state.memoryGameCardToggleState
                                    : currentFileMemoryGameShuffledItems.map((item: string, idx: number) => {
                                        return {
                                            idx: idx,
                                            content: item,
                                            toggleState: false,
                                            isLocked: false
                                        }
                                    })
                                : state.memoryGameCardToggleState,
                        ...currentFileHandlers[action.payload]?.(),
                        clicksCounterDragAndDrop: 0,
                    })
                },
                [TOGGLE_CARD]: function () {

                    return ({
                        ...state,
                        clicksCounter: state.clicksCounter + 1,
                        memoryGameCardToggleState: state.memoryGameCardToggleState?.map((card) => {
                            if (
                                (card.idx === action.payload.idx && !card.isLocked)
                            ) {
                                return {
                                    ...card,
                                    toggleState: !card.toggleState,
                                    isLocked: action.payload.isLocked
                                }
                            } else if (card.idx !== action.payload.idx
                                && !card.isLocked
                                && card.content === action.payload.item
                                && card.toggleState) {
                                return {
                                    ...card,
                                    isLocked: action.payload.isLocked
                                }
                            } else {
                                return card
                            }
                        }),
                    })

                },
                [SET_TOGGLE_STATE_TO_FALSE]: function () {
                    return ({
                        ...state,
                        memoryGameCardToggleState:
                            state.memoryGameCardToggleState
                                ?
                                state.memoryGameCardToggleState.filter((card) => {
                                    return card.toggleState && !card.isLocked
                                }).length === 2
                                    ?
                                    state.memoryGameCardToggleState.map((card) => {
                                        if (card.toggleState && !card.isLocked) {
                                            return {
                                                ...card,
                                                toggleState: false
                                            }
                                        } else {
                                            return card
                                        }
                                    })
                                    :
                                    state.memoryGameCardToggleState
                                :
                                state.memoryGameCardToggleState
                    })
                },
                [RESTART_GAME]: function () {

                    const files = filesMemoryGame;

                    const allMemoryGamesNamesArray = files.filter((file) => file.fileName.includes("Funny")).map((file) => {
                        return file.fileName
                    })
                    const currentFileNameFound = arrayDiff(allMemoryGamesNamesArray, state.finishedGameNames)[0]
                    const currentFileFound = files.filter((file) => file.fileName === currentFileNameFound)[0]
                    const currentFileShuffledItems = shuffleArrayItems(currentFileFound.items)

                    return ({
                        ...state,
                        currentFileMemoryGame: {
                            ...currentFileFound,
                            shuffledItems: currentFileShuffledItems
                        },
                        clicksCounter: 0,
                        memoryGameCardToggleState: currentFileShuffledItems.map((item: string, idx: number) => {
                            return {
                                idx: idx,
                                content: item,
                                toggleState: false,
                                isLocked: false
                            }
                        })
                    })
                },
                [CLEAR_MEMORY_GAME_BOARD_AND_ADD_GAME_NAME_TO_FINISHED]: function () {
                    return ({
                        ...state,
                        memoryGameCardToggleState: [],
                        finishedGameNames: state.finishedGameNames.concat(action.payload),
                        currentFileMemoryGame: {
                            fileName: "",
                            taskType: "",
                            items: [],
                            shuffledItems: [],
                            path: "",
                            component: ""

                        },
                        clicksCounter: 0
                    })
                },
                [CLEAR_DRAG_AND_DROP_BOARD_AND_ADD_GAME_NAME_TO_FINISHED]: function () {
                    return ({
                        ...state,
                        finishedGameNames: state.finishedGameNames.concat(action.payload),
                        currentFilePuzzle: {
                            fileName: "",
                            items: [],
                            shuffledItems: [],
                            colors: {},
                            beingDragged: -1,
                            shouldShowOrderCheckResult: false,
                            taskType: "",
                            path: "",
                            component: ""
                        },
                        clicksCounterDragAndDrop: 0
                    })
                },
                [ON_DRAG_START]: function () {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            beingDragged: action.payload,
                            shouldShowOrderCheckResult: false
                        }
                    })
                },
                [ON_DRAG_START_FILES]: function () {
                    return ({
                        ...state,

                        currentFilePuzzle: {
                            ...state.currentFilePuzzle,
                            beingDragged: action.payload,
                            shouldShowOrderCheckResult: false
                        }
                    })
                },
                [ON_DROP]: function () {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            shuffledItems: action.payload
                        }
                    })
                },
                [ON_DROP_FILES]: function () {
                    return ({
                        ...state,
                        clicksCounterDragAndDrop: state.clicksCounterDragAndDrop + 1,
                        currentFilePuzzle: {
                            ...state.currentFilePuzzle,
                            shuffledItems: action.payload
                        }
                    })
                },
                [SHOW_ORDER_CHECK_RESULT]: function () {
                    return ({
                        ...state,
                        puzzle: {
                            ...state.puzzle,
                            shouldShowOrderCheckResult: true
                        }
                    })
                },
                [SHOW_ORDER_CHECK_RESULT_FILES]: function () {
                    return ({
                        ...state,
                        currentFilePuzzle: {
                            ...state.currentFilePuzzle,
                            shouldShowOrderCheckResult: true
                        }
                    })
                }, [HIDE_ORDER_CHECK_RESULT]: function () {
                    return ({
                        ...state,
                        currentFilePuzzle: {
                            ...state.currentFilePuzzle,
                            shouldShowOrderCheckResult: false
                        }
                    })
                },
                [CHECK_MATCHED_PAIRS]: function () {
                    return ({
                        ...state,
                        currentFilePairMatching: {
                            ...state.currentFilePairMatching,
                            shouldShowOrderCheckResult: true
                        },
                        pairMatchingEndTime: Date.now()
                    })
                },
            }
            return (
                computerScreenHandlers[action.type]
                    ? computerScreenHandlers[action.type]()
                    : state)
        },
        guestSlot: function (state: GuestSlot = preloadedGuestSlotState, action) {

            function possiblyGetNextVisitPhase(): GuestSlot {
                return (
                    state.guests.includes(state.currentGuest)
                        ?
                        {
                            ...state,
                            currentEvent: action.payload,
                            currentVisitPhase: state.visits[state.currentGuest]
                                    .find(phase => phase.event === action.payload)
                                || state.currentVisitPhase,
                            visitsHistory:
                                {
                                    ...state.visitsHistory,
                                    [state.currentGuest]: state.visitsHistory[state.currentGuest]
                                        .concat(state.visits[state.currentGuest]
                                                .find(phase => phase.event === action.payload)
                                            || state.currentVisitPhase)
                                }
                        }
                        :
                        {...state})
            }

            const guestSlotHandlers: GuestSlotHandlers = {
                [CLOSE_VISIT]: function (): GuestSlot {
                    return {
                        ...state,
                        currentEvent: ""
                    }
                },
                [DELAY_WORK_VISIT]: possiblyGetNextVisitPhase,
                [START_WORK_VISIT]: possiblyGetNextVisitPhase,
                [REJECT_VISIT]: possiblyGetNextVisitPhase,
                [READY_VISIT]: possiblyGetNextVisitPhase,
                [END_VISIT]: function (): GuestSlot {
                    return (
                        state.guests.includes(state.currentGuest)
                            ?
                            {
                                ...state,
                                currentEvent: action.payload,
                                currentVisitPhase: state.visits[state.currentGuest]
                                        .find(phase => phase.event === action.payload)
                                    || state.currentVisitPhase,
                                visitsHistory:
                                    {
                                        ...state.visitsHistory,
                                        [state.currentGuest]: state.visitsHistory[state.currentGuest]
                                            ?.concat(state.visits[state.currentGuest]
                                                    .find(phase => phase.event === action.payload)
                                                || state.currentVisitPhase)
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
                                currentVisitPhase: getDialoguePhase(
                                    state.visitsHistory,
                                    action.payload.guest,
                                    state.visits,
                                    action.payload.event),

                                visitsHistory:
                                    state.guests.includes(action.payload.guest)
                                        ?
                                        updateDialogueHistory(
                                            state.visitsHistory,
                                            action.payload.guest,
                                            state.visits,
                                            action.payload.event)
                                        :
                                        state.visitsHistory
                            }
                            :
                            {...state})
                },
                [INITIALIZE_VISIT]: function (): GuestSlot {

                    const guestList = Object.keys(getVisits(action.payload.playerName)).slice(0, 3)

                    return ({
                        ...state,
                        guests: guestList,
                        visits: (guestList
                            .map((guest: string) => ({[guest]: getVisits(action.payload.playerName)[guest]})))
                            .reduce(
                                (acc, x) => {
                                    return {...acc, ...x}
                                },
                                {}
                            ),

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
