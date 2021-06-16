import React from 'react';
import ReactDOM from 'react-dom';
import {WorkspaceLayout} from "./components/Workspace/Workspace.layout";
import {GlobalStyle} from "./components/GlobalStyle/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
    <WorkspaceLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

