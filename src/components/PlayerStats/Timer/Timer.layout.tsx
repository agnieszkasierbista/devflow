import React from "react"
import { StyledTimer } from "./Timer.styled"
import {TimerProps} from "./Timert.types"

export const Timer: React.FC<TimerProps> = function (props) {

    React.useEffect(() => {
        setInterval(() => {
            props.dispatchUpdateTimer()
        }, 1000)
    })


    const hours = Math.floor((props.timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((props.timer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((props.timer % (1000 * 60)) / 1000);

    return (
        <StyledTimer>
            {hours + "h:" + minutes + "m:" + seconds + "s"}
        </StyledTimer>
    )

}


