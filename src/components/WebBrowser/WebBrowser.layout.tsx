import React from "react"
import {StyledWebBrowser} from "./WebBrowser.styled"
import TabBar from "./TabBar"
import {webBrowserTabsPaths} from "../CodeEditor/TabBar/TabBar.layout";
import OpenedTabs from "./OpenedTabs/OpenedTabs";
import {WebBrowserProps} from "./WebBrowser.types";


export const WebBrowser: React.FC<WebBrowserProps> = () => {
    return (
        <StyledWebBrowser>

            <TabBar
                app={webBrowserTabsPaths}
            />
            <OpenedTabs/>

        </StyledWebBrowser>
    )

}