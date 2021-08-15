import styled from "styled-components";

export const StyledScrumBoardCard = styled.div<{ item: string | string[] }>`
  border: ${props => props.item !== "" ? "1px solid black" : "none"};;
  background-color: ${props => props.item !== "" ? "palegoldenrod" : "none"};
  margin-left: 2px;
  color: black;
  display: flex;
  justify-content: left;
  height: 90%;
  width: 80%;
`;