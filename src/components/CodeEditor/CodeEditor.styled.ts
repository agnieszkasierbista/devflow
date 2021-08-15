import styled from 'styled-components';
import {Link} from "react-router-dom";

export const StyledCodeEditor = styled.div`
  background-color: black;
  border: 2px double gray;
  border-radius: 5px;
  color: aliceblue;
  display: block;
  height: 77%;
  width: 95%;
`;

export const StyledTabBar = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: seashell;
  height: 15%;
  width: 99%;
  align-items: flex-end;
`;

export const StyledCodeEditorTabLink = styled(Link)`
  display: flex;
  border: 2px solid black;
  border-bottom: 0;
  background-color: seashell;
  height: 90%;
  width: 20%;
  border-radius: 3px 3px 0 0 ;
  margin: 0 1px 0 1px;
`;