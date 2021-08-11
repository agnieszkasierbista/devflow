import styled from "styled-components";

export const StyledScrumBoard = styled.div`
  background-color: seashell;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 16% 21% 21% 21% 21%;
  height: 99%;
  width: 99%;
  margin: 2px 2px 2px 2px;
`;

export const StyledScrumBoardColumn = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 16% 21% 21% 21% 21%;
  grid-row-start: 1;
  grid-row-end: 6;
  height: 100%;
  width: 100%;
`;

export const StyledScrumBoardTitle = styled.div`
  border: 3px solid black;
  border-radius: 4px;
`;


export const StyledScrumBoardCell = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

