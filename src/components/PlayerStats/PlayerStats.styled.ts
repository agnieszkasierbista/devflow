import styled from "styled-components";


export const StyledPlayerStats = styled.div`
  
  border: 2px solid coral;
  border-radius: 2px;
  text-align: center;
  

  @media (
    max-width: 599px
  ) {
    order: 1;
  }

  @media (
    min-width: 600px
  ) {
    grid-column-start: 2;
    grid-row-start: 1;
  }
`;