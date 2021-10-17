import React from 'react';
import ComputerScreen from "../ComputerScreen/ComputerScreen";
import {StyledWorkspace} from "./Workspace.styled";
import Overlay from "../common/Overlay/Overlay";
import PlayerNameInput from "../PlayerNameInput/PlayerNameInput";
import {WorkspaceProps} from "./Workspace.types";
import GuestSlot from "../GuestSlot/GuestSlot";
import PlayerStats from "../PlayerStats/PlayerStats";


export const Workspace: React.FC<WorkspaceProps> = () => (
    <StyledWorkspace>
        <PlayerStats/>
        <Overlay/>
        <PlayerNameInput/>
        <ComputerScreen/>
        <GuestSlot/>
    </StyledWorkspace>
);