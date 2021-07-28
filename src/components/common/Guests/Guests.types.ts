import {Conversations, DialogueOption} from "../../../model/state";

export interface GuestsProps extends GuestsOwnProps,
    GuestsStateProps,
    GuestsDispatchProps {
}

export interface GuestsOwnProps {

}

type Guest = string;

export interface GuestsStateProps {
    guests: Guest[],
    visits: Conversations,
    currentVisitPhase: DialogueOption,
    visitsHistory: Conversations,
    randomColors: string[]
}

export interface GuestsDispatchProps {
    dispatchStartVisit: (guest: string, event: string) => void
}