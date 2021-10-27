import React from "react"
import { StyledTimer } from "./Timer.styled"
import {TimerProps} from "./Timert.types"

export const Timer: React.FC<TimerProps> = function (props) {

    // React.useEffect(() => {
    //     setInterval(() => {
    //         props.dispatchUpdateTimer()
    //     }, 500)
    // })

//TODO: add consts with correct names for numbers values
    const hours = Math.floor((props.timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((props.timer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((props.timer % (1000 * 60)) / 1000);

    return (
        <StyledTimer>
            <span>Time Played: </span>
            {hours <= 9 ? "0" + hours + "h:" : hours + "h:"}
            {minutes <= 9 ? "0" + minutes + "m:" : minutes + "m:"}
            {seconds <= 9 ? "0" + seconds + "s:" : seconds + "s"}
        </StyledTimer>
    )

}


