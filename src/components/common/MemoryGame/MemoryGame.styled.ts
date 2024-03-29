import styled from "styled-components";


export const StyledMemoryGameBoard = styled.div<{ currentFileMemoryGameItems: string[] }>`
  font-size: 30px;
  display: grid;
  height: 85%;
  width: 95%;
  grid-template-rows: ${props => {
    const rowNumber = Math.round((props.currentFileMemoryGameItems.length + 1) / 4);
    const rowPercentage = 100 / rowNumber;
    const row = Math.round(rowPercentage) + "%"
    return new Array(rowNumber).fill(row).join(' ');
   }};
  grid-template-columns: 25% 25% 25% 25%;
  border: 2px solid darkmagenta;
  background-color: deeppink;
`;

export const StyledMemoryGameCardFront = styled.div`
  display: flex;
  height: 85%;
  width: 95%;
  border: 2px solid darkmagenta;
  background-color: hotpink;
  align-items: center;
  justify-content: center;
`;

export const StyledMemoryGameCardBack = styled.div<{ isLocked: boolean }>`
  display: flex;
  height: 85%;
  width: 95%;
  border: 2px solid darkmagenta;
  background-color: ${props => props.isLocked === true ? "red" : "palevioletred"};
  align-items: center;
  justify-content: center;
`;

export const StyledGameControls = styled.div`
  display: grid;
  width: 95%;
  height: 10%;
  border: 2px solid darkmagenta;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: 30% 40% 30%;
`;

export const StyledResetButton = styled.button`
  decoration: none;
  border: 2px solid hotpink;
  background-color: darkmagenta;
  display: flex;
  grid-column-start: 3;
  align-items: center;
  justify-content: center;
  width: 95%;
  color: hotpink;
`;

export const StyledMovesCounter = styled.div`
  border: 2px solid hotpink;
  background-color: darkmagenta;
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  align-items: center;
  justify-content: center;
  width: 95%;
  color: hotpink;
`;

export const StyledInfoBox = styled.div`
  height: 100px;
  width: 250px;
  background-color: magenta;
  border: 2px solid darkmagenta;
  position: absolute;
  top: 200px;
  left: 25%;
`;

