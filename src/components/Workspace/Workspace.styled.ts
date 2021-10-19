import styled from "styled-components";


export const StyledWorkspace = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  
  @media (
    min-width: 600px
  ) {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: 10% 85% 5%;
  }
`;
