import React from "react";
import {Route, Switch} from "react-router-dom";
import {conversationPaths} from "../Contacts/Contacts.layout";
import {DELAY_WORK, END_CONVERSATION, END_VISIT, READY, REJECT, START_WORK} from "../../../actions";
import {OnClickHandlers} from "../../../model/state";
import {VisitProps} from "./Visit.types";
import {StyledVisit} from "./Visit.styled";

export const Visit: React.FC<VisitProps> = (props) => {

    return (
        props.currentVisitPhase.event !== ""
            ?
            (
                <StyledVisit>
                    <Switch>

                        <Route key={props.currentVisitPhase.npcName}
                               path={conversationPaths[props.currentVisitPhase.npcName]}>

                            <div key={props.currentVisitPhase.npcName}>
                                {
                                    (props.visitsHistory[props.currentGuest]).length
                                        ? props.visitsHistory[props.currentGuest].map((phase, idx) => {

                                            const pref = idx - 1
                                            const previousPhase = props.visitsHistory[props.currentGuest]?.[pref]

                                            return (
                                                <React.Fragment key={idx}>

                                                    {

                                                        previousPhase &&
                                                        <div>{"Me: " + (previousPhase?.playerDialogueOptions.find((option) => option.event === phase.event)?.rpl || "")}</div>

                                                    }
                                                    <div> {phase.npcName + ": " + phase.npcDialogueOption}</div>


                                                </React.Fragment>
                                            )

                                        })
                                        : props.currentGuest + ": " + props.currentVisitPhase.npcDialogueOption
                                }
                            </div>


                            {
                                props.currentVisitPhase.event !== "END_CONVERSATION"
                                    ?
                                    <div>Me:</div>

                                    :
                                    null
                            }

                            {props.currentVisitPhase.playerDialogueOptions?.map((option, idx) => {

                                return (
                                    <React.Fragment key={idx}>

                                        <button onClick={() => {
                                            const onClickHandlers: OnClickHandlers = {
                                                [END_VISIT]: props.dispatchEndVisit,
                                                [READY]: props.dispatchReady,
                                                [REJECT]: props.dispatchReject,
                                                [START_WORK]: props.dispatchStartWork,
                                                [DELAY_WORK]: props.dispatchDelayWork
                                            }

                                            return onClickHandlers[option.event]
                                                ? onClickHandlers[option.event](option.event)
                                                : console.log(option.event)
                                        }}>
                                            {idx + 1}: {option.rpl}
                                        </button>
                                    </React.Fragment>
                                )
                            })}

                        </Route>

                    </Switch>
                </StyledVisit>
            )
            :
            <div>EMPTY</div>
    )
}