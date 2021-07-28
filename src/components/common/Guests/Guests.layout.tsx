import {GuestsProps} from "./Guests.types";
import React from "react";
import {StyledGuest, StyledGuests} from "./Guests.styled";
import {isEmpty} from "../../../helpers/isEmpty";


export const Guests: React.FC<GuestsProps> = (props) => {

    return (
        <StyledGuests>
            {props.guests.map((guest, idx) => {

                function eventFinder(guest: string): string {
                    const event = (
                        !isEmpty(props.visitsHistory)
                            ?
                            !isEmpty(props.visitsHistory.guest)
                                ?
                                props.visitsHistory.guest[props.visitsHistory.guest.length - 1].event
                                :
                                "START_VISIT"
                            :
                            "START_VISIT"
                    )

                    return event
                }

                return (
                    <button key={idx}
                         onClick={() => props.dispatchStartVisit(guest, eventFinder(guest))}
                    >
                        <StyledGuest>
                            {guest}
                        </StyledGuest>
                    </button>
                )
            })
            }
        </StyledGuests>
    )
}
