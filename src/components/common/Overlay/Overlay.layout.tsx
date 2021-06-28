import React from 'react';
import { StyledOverlay } from './Overlay.styled';



export function Overlay(props: any) {

    return props.isOverlayVisible ?
        (
            <StyledOverlay
            />
        )
        :
        null
}