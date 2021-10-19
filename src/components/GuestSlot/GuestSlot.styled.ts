import styled from "styled-components";


export const StyledGuestSlot = styled.div`
  
  display: block;
  background-color: lightblue;
  
  

  @media (
    max-width: 599px
  ) {
    order: 2;
    height: 40%;
  }

  @media (
    min-width: 600px
  ) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 100%;
  }
`;