import styled from "styled-components";

export const StyledTask = styled.div`
  display: flex;
  flex-flow: row;
  height: 90%;
  width: 100%;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-flow: column;
  height:100%;
  width: 45%;
  align-items: center;
`;

export const StyledClickable = styled.div`
  border: 2px solid black;
  border-radius: 2px;
  display: flex;
  flex-flow: column;
  margin: 4px;
  min-width: 50px;
  max-width: 70px;
  text-align: center;
  background-color: white;
  color: midnightblue;
`;

export const StyledButton = styled.button`
  display: flex;
  align-self: flex-end;
`;