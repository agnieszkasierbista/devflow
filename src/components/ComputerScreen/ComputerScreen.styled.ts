import styled from "styled-components";

export const StyledComputerScreen = styled.div`
  
  display: flex;
  flex-flow: column-reverse;
  align-items: flex-end;
  background-color: lightgrey;
  border: 2px double black;
  border-radius: 5px;

  @media (
    max-width: 599px
  ) {
    order: 3;
    height: 50%;
  }

  @media (
    min-width: 600px
  ) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end:3;
    height: 80%;
  }
`;
