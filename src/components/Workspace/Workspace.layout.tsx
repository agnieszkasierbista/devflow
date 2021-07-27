import React from 'react';
import ComputerScreen from "../ComputerScreen/ComputerScreen";
import {StyledWorkspace} from "./Workspace.styled";
import Overlay from "../common/Overlay/Overlay";
import PlayerNameInput from "../PlayerNameInput/PlayerNameInput";
import PlayerName from "../PlayerName/PlayerName";
import {WorkspaceProps} from "./Workspace.types";
import GuestSlot from "../GuestSlot/GuestSlot";


export const Workspace: React.FC<WorkspaceProps> = () => (
    <StyledWorkspace>
        <PlayerName/>
        <Overlay/>
        <PlayerNameInput/>
        <ComputerScreen/>
        <GuestSlot/>
    </StyledWorkspace>
);