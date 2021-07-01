import React from 'react';
import {ComputerScreen} from "../ComputerScreen/ComputerScreen.layout";
import {GuestSlot} from "../GuestSlot/GuestSlot";
import {StyledWorkspace} from "./Workspace.styled";
import Overlay from "../common/Overlay/Overlay";
import PlayerNameInput from "../PlayerNameInput/PlayerNameInput";
import PlayerName from "../PlayerName/PlayerName";
import {WorkspaceProps} from "./Workspace.types";


export const Workspace: React.FC<WorkspaceProps> = () => (
    <StyledWorkspace>
        <PlayerName/>
        <ComputerScreen/>
        <GuestSlot/>
        <Overlay/>
        <PlayerNameInput/>
    </StyledWorkspace>
);