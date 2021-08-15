import React from 'react';
import {StyledMinimizedAppLink} from './MinimizedApp.styled';
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";


const appsList: string[] = [codeEditorPath, communicatorPath, webBrowserPath];

export const MinimizedApps: React.FC = () => {

    const mappedAppsList =
        appsList
            .map(app => {
                    return (
                        <React.Fragment key={app}>
                            <StyledMinimizedAppLink to={app}>
                                {app}
                            </StyledMinimizedAppLink>
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