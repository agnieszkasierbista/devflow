import React from 'react';
import {StyledMinimizedApp, StyledMinimizedAppLink} from './MinimizedApp.styled';


const appsList = ["CodeEditor", "Communicator", "WebBrowser"];

export function MinimizedApps(): any {
    return (
        appsList
            .map(app => {
                    return (
                        <React.Fragment>
                            <StyledMinimizedApp key={app}>
                                <StyledMinimizedAppLink to={`/${app}`}>
                                    {app}
                                </StyledMinimizedAppLink>
                            </StyledMinimizedApp>
                        </React.Fragment>
                    )
                }
            )
    )
}

//
// onloadeddata(
// return(
//     <>
//         <StyledMinimizedApp>
//             <Link to="/1">
//                 Code Editor
//             </Link>
//             <Link to="/2">
//                 Communicator
//             </Link>
//             <Link to="/3">
//                 Web browser
//             </Link>
//         </StyledMinimizedApp>
//     </>
// )
// )