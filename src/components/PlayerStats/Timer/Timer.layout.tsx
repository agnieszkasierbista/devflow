import React from "react"
import {StyledTimer} from "./Timer.styled"
import {TimerProps} from "./Timert.types"

export const Timer: React.FC<TimerProps> = function (props) {

    // React.useEffect(() => {
    //     setInterval(() => {
    //         props.dispatchUpdateTimer()
    //     }, 500)
    // })

    const second = 1000;
    const minute = 1000 * 60;
    const hour = 1000 * 60 * 60;
    const day = 1000 * 60 * 60 * 24;

    const hours = Math.floor((props.timer % day) / hour);
    const minutes = Math.floor((props.timer % hour) / minute);
    const seconds = Math.floor((props.timer % minute) / second);

    return (
        <StyledTimer>
            <span>Time Played: </span>
            {hours <= 9 ? "0" + hours + "h:" : hours + "h:"}
            {minutes <= 9 ? "0" + minutes + "m:" : minutes + "m:"}
            {seconds <= 9 ? "0" + seconds + "s:" : seconds + "s"}
        </StyledTimer>
    )

}


