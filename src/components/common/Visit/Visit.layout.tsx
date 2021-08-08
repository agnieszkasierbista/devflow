import React from "react";
import {DELAY_WORK_VISIT, END_VISIT, READY_VISIT, REJECT_VISIT, START_WORK_VISIT} from "../../../actions";
import {OnClickHandlers} from "../../../model/state";
import {VisitProps} from "./Visit.types";
import {StyledVisit} from "./Visit.styled";

export const Visit: React.FC<VisitProps> = (props) => {

    return (
        props.currentEvent !== ""
            ?
            (
                <StyledVisit>


                    <div key={props.currentVisitPhase.npcName}>

                        {
                            props.currentVisitPhase.event === END_VISIT
                                ?
                                <button
                                    onClick={() => {
                                        props.dispatchCloseVisit();
                                    }}
                                >
                                    X
                                </button>

                                :
                                null
                        }
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
                        props.currentVisitPhase.event !== END_VISIT
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
                                        [READY_VISIT]: props.dispatchReadyVisit,
                                        [REJECT_VISIT]: props.dispatchRejectVisit,
                                        [START_WORK_VISIT]: props.dispatchStartWorkVisit,
                                        [DELAY_WORK_VISIT]: props.dispatchDelayWorkVisit
                                    }

                                    if (onClickHandlers[option.event]) {
                                        onClickHandlers[option.event](option.event)
                                    }
                                }}>
                                    {idx + 1}: {option.rpl}
                                </button>
                            </React.Fragment>
                        )
                    })}


                </StyledVisit>
            )
            :
            <div>EMPTY</div>
    )
}