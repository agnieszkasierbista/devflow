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
    dispatchReadyVisit: (event: string) => void,
    dispatchRejectVisit: (event: string) => void,
    dispatchStartWorkVisit: (event: string) => void,
    dispatchDelayWorkVisit: (event: string) => void
}