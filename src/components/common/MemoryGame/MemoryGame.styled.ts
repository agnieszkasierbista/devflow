import styled from "styled-components";


export const StyledMemoryGameBoard = styled.div`
  display: grid;
  height: 85%;
  width: 95%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
  border: 2px solid darkmagenta;
  background-color: deeppink;
`;

export const StyledMemoryGameCardFront = styled.div`
  height: 85%;
  width: 95%;
  border: 2px solid darkmagenta;
  background-color: hotpink;
`;

export const StyledMemoryGameCardBack = styled.div`
  height: 85%;
  width: 95%;
  border: 2px solid darkmagenta;
  background-color: palevioletred;
`;
