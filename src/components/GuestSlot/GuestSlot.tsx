import React from 'react';
import {StyledGuestSlot} from './GuestSlot.styled'
import {Taskbar} from "../Taskbar/Taskbar.layout";
import { Route } from 'react-router-dom';

export function GuestSlot() {
    return (
        <StyledGuestSlot>

            <Route path="/">
                GUEST SLOT
            </Route>

        </StyledGuestSlot>
    )
}