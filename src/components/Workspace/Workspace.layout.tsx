import React from 'react';
import {ComputerScreen} from "../ComputerScreen/ComputerScreen.layout";
import {GuestSlot} from "../GuestSlot/GuestSlot";
import {StyledWorkspace} from "./Workspace.styled";
import Overlay from "../common/Overlay/Overlay";



export function Workspace() {
    return (
        <StyledWorkspace>
            <ComputerScreen />
            <GuestSlot />
            <Overlay/>
        </StyledWorkspace>
    )
}