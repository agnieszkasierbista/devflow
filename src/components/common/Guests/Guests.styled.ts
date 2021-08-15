import styled from "styled-components";


export const StyledGuests = styled.div`
  height: 20%;
  width: 100%;
`;

export const StyledGuest = styled.button<{idx: number}>`
  display: block;
  border: 1px solid black;
  border-radius: 2px;
  margin: 2px;
  position: relative;
  animation-name: ${(props) => {
      if (props.idx === 0) {
          return "example1"
      } else if (props.idx === 1) {
          return "example2"
      } else {
          return "example3"
      }}};
  animation-duration: 5s;


@keyframes example1 {
  0%   {left:0px; }
  25%  {left:150px; }
  50%  {left:100px; }
  75%  {left:150px; }
  100% {left:0px; }
}


@keyframes example2 {
    0%   {left:0px; }
    25%  {left:50px; }
    50%  {left:150px; }
    75%  {left:110px; }
    100% {left:0px; }
}

@keyframes example3 {
  0%   {left:120px; }
  25%  {left:10px; }
  50%  {left:100px; }
  75%  {left:30px; }
  100% {left:70px; }
    }
`;