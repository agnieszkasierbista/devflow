import {ConversationProps} from "./Conversation.types";
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledCommunicatorConversation} from "./Conversation.styled";
import {conversationPaths} from "../Contacts/Contacts.layout";
import {DELAY_WORK, END_CONVERSATION, READY, REJECT, START_WORK} from "../../../actions";
import {OnClickHandlers} from "../../../model/state";

export const Conversation: React.FC<ConversationProps> = (props) => {

    return (
        props.currentConversationPhase.event !== ""
            ?
            (
                <StyledCommunicatorConversation>
                    <Switch>

                        <Route key={props.currentConversationPhase.npcName}
                               path={conversationPaths[props.currentConversationPhase.npcName]}>

                            <div key={props.currentConversationPhase.npcName}>
                                {
                                    (props.conversationsHistory[props.currentContact]).length
                                        ? props.conversationsHistory[props.currentContact].map((phase, idx) => {

                                            const pref = idx - 1
                                            const previousPhase = props.conversationsHistory[props.currentContact]?.[pref]

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
                                        : props.currentContact + ": " + props.currentConversationPhase.npcDialogueOption
                                }
                            </div>


                            {
                                props.currentConversationPhase.event !== "END_CONVERSATION"
                                    ?
                                    <div>Me:</div>

                                    :
                                    null
                            }

                            {props.currentConversationPhase.playerDialogueOptions?.map((option, idx) => {

                                return (
                                    <React.Fragment key={idx}>

                                        <button onClick={() => {
                                            const onClickHandlers: OnClickHandlers = {
                                                [END_CONVERSATION]: props.dispatchEndConversation,
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
                </StyledCommunicatorConversation>
            )
            :
            <div>EMPTY</div>
    )
}