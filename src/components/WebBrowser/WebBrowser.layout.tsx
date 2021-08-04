import React from "react"
import {StyledWebBrowser} from "./WebBrowser.styled"
import DragAndDropBoard from "../DragAndDropBoard/DragAndDropBoard";


export const WebBrowser = () => {
    return (
        <StyledWebBrowser>
            <div>
                Presentation:
                <DragAndDropBoard/>
            </div>
        </StyledWebBrowser>
    )

}