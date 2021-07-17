import {ConversationProps} from "./Conversation.types";
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledCommunicatorConversation} from "./Conversation.styled";
import {conversationPaths} from "../../Communicator/Contacts/Contacts.layout";
import {DELAY_WORK, END_CONVERSATION, READY, REJECT, START_CONVERSATION, START_WORK} from "../../../actions";
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
                            <div>
                                {
                                    props.currentConversationPhase.npcName
                                }
                                :
                                <br/>
                                Me:
                                {
                                    props.currentConversationPhase.npcDialogueOption
                                }
                            </div>
                            {props.currentConversationPhase.playerDialogueOptions.map((option, idx) => {

                                return (
                                    <button key={option.event} onClick={() => {
                                        const onClickHandlers: OnClickHandlers = {
                                            [START_CONVERSATION]: props.dispatchStartConversation,
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