import React from "react"
import {StyledWebBrowser} from "./WebBrowser.styled"
import TabBar from "./TabBar"
import OpenedTabs from "./OpenedTabs/OpenedTabs";
import {WebBrowserProps} from "./WebBrowser.types";


export const WebBrowser: React.FC<WebBrowserProps> = () => {
    return (
        <StyledWebBrowser>

            <TabBar
                app="webBrowser"
            />
            <OpenedTabs/>

        </StyledWebBrowser>
    )

}