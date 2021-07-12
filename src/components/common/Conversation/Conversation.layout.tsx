import {ConversationProps} from "./Conversation.types";
import React from "react";
import {Route, Switch} from "react-router-dom";
import {StyledCommunicatorConversation} from "./Conversation.styled";
import {conversationPaths} from "../../Communicator/Contacts/Contacts.layout";


export const Conversation: React.FC<ConversationProps> = (props) => {

    const currentPhase = props.conversation.phase;

    console.log("props", props);

    return (
        currentPhase.events !== ""
            ?
            (
                <StyledCommunicatorConversation>
                    <Switch>

                        <Route key={currentPhase.npcName} path={conversationPaths[currentPhase.npcName]}>
                            <div>
                                {
                                    currentPhase.dialogueOption
                                }
                            </div>
                            <div>
                                1:
                                2:
                            </div>
                        </Route>


                    </Switch>
                </StyledCommunicatorConversation>
            )
            :
            <div>EMPTY</div>
    )
}