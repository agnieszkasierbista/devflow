import React from 'react';
import {Clock} from '../Clock/Clock.layout';
import {MinimizedApps} from '../MinimizedApps/MinimizedApps.layout';
import {StyledTaskbar} from './Taskbar.styled';

export function Taskbar() {
    return (
        <StyledTaskbar>
            <MinimizedApps />
            <Clock />
        </StyledTaskbar>
    )
}