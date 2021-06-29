import React from 'react';
import {StyledOverlay} from './Overlay.styled';
import {OverlayProps} from "./Overlay.types";

export const Overlay: React.FC<OverlayProps> = (props) => {

    return (
        props.isOverlayVisible
            ? <StyledOverlay/>
            : null
    );
};