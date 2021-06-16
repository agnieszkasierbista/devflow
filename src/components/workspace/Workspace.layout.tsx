import React from 'react';
import {ComputerScreenLayout} from "../computerScreen/ComputerScreen.layout";
import {GuestSlotLayout} from "../guestSlot/GuestSlot.layout";
import {StyledWorkspace} from "./Workspace.styled";


export function WorkspaceLayout() {
    return (
        <StyledWorkspace>
            <ComputerScreenLayout />
            <GuestSlotLayout />
        </StyledWorkspace>
    )
}