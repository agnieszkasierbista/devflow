import React from 'react';
import {StyledMinimizedAppLink} from './MinimizedApp.styled';
import {codeEditorPath, communicatorPath, webBrowserPath} from "../../model/paths";


const appsList: string[] = [codeEditorPath, communicatorPath, webBrowserPath];

export const MinimizedApps: React.FC = () => {

    const mappedAppsList =
        appsList
            .map(app => {
                    return (
                        <StyledMinimizedAppLink
                            key={app}
                            to={app}
                        >
                            {app}
                        </StyledMinimizedAppLink>
                    )
                }
            )

    return (
        <>
            {mappedAppsList}
        </>
    );
};