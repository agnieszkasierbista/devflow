import styled, { keyframes } from "styled-components";


export const StyledClock = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledClockFace = styled.div`
  padding: 20px;
  background-image: conic-gradient(black 20deg, pink 0);
  border-radius: 50%;
  border: 2px solid green;
  animation: ${rotate} 60s linear;
`;