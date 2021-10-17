import React from 'react';
import {StyledGuestSlot} from './GuestSlot.styled'
import Guests from "./Guests";
import {GuestSlotProps} from "./GuestSlot.types";
import Visit from './Visit';


export const GuestSlot: React.FC<GuestSlotProps> = (props) => {

    React.useEffect(() => {
        if (props.playerName) {
            props.dispatchInitializeVisit()
        }
    }, [props.playerName])

    return (
        <StyledGuestSlot>
            <Guests/>
            <Visit/>
        </StyledGuestSlot>
    )
};
