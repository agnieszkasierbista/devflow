import React from 'react';
import {ComputerScreenLayout} from "../ComputerScreen/ComputerScreen.layout";
import {GuestSlotLayout} from "../GuestSlot/GuestSlot.layout";
import {StyledWorkspace} from "./Workspace.styled";


export function WorkspaceLayout() {
    return (
        <StyledWorkspace>
            <ComputerScreenLayout />
            <GuestSlotLayout />
        </StyledWorkspace>
    )
}