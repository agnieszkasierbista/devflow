import React from 'react';
import {StyledMinimizedApp, StyledMinimizedAppLink} from './MinimizedApp.styled';
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";


const appsList: string[] = [codeEditorPath, communicatorPath, webBrowserPath];

export const MinimizedApps: React.FC = () => {

    const mappedAppsList =
        appsList
        .map(app => {
                return (
                    <React.Fragment key={app}>
                        <StyledMinimizedApp>
                            <StyledMinimizedAppLink to={app}>
                                {app}
                            </StyledMinimizedAppLink>
                        </StyledMinimizedApp>
                    </React.Fragment>
                )
            }
        )


    return (
        <>
            {mappedAppsList}
        </>
    );
};