import {Conversations, DialogueOption} from "../../../model/state";

export interface VisitProps extends VisitOwnProps,
    VisitStateProps,
    VisitDispatchProps {
}

export interface VisitOwnProps {

}

export interface VisitStateProps {
    visits: Conversations,
    currentVisitPhase: DialogueOption,
    currentVisitHistory: string[],
    currentGuest: string,
    visitsHistory: Conversations,
    currentEvent: string
}

export interface VisitDispatchProps {
    dispatchEndVisit: (event: string) => void,
    dispatchReady: (event: string) => void,
    dispatchReject: (event: string) => void,
    dispatchStartWork: (event: string) => void,
    dispatchDelayWork: (event: string) => void
}