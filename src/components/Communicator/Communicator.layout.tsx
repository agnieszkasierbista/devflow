import React from "react";
import { StyledCommunicator } from "./Communicator.styled";
import {CommunicatorProps} from "./Communicator.types";
import Contacts from "./Contacts/Contacts";


export const Communicator: React.FC<CommunicatorProps> = (props) => {
    return (
        <StyledCommunicator>
            <Contacts/>
            {/*<Conversation/>*/}
        </StyledCommunicator>
    )
};
