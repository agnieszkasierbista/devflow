import styled from "styled-components";


export const StyledGuests = styled.div`
  height: 20%;
  width: 100%;
`;

export const StyledGuest = styled.button<{idx: number}>`
  max-width: 70px;
  height: fit-content;
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
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;


@keyframes example1 {
  0% {left:0px; }
  5%  {left:10px; }
  10%  {left:30px; }
  15%  {left:60px; }
  20%  {left:100px; }
  25%  {left:150px; }
  35% {left:90px; }
  45%  {left:60px; }
  55%  {left:10px; }
  65%  {left:100px; }
  75%  {left:150px; }
  85% {left:200px; }
  95% {left:100px; }
  100% {left:50px; }
}


@keyframes example2 {
  0% {left:0px; }
  5%  {left:150px; }
  10%  {left:200px; }
  15%  {left:150px; }
  20%  {left:100px; }
  25%  {left:200px; }
  35% {left:50px; }
  45%  {left:170px; }
  55%  {left:150px; }
  65%  {left:100px; }
  75%  {left:150px; }
  85% {left:50px; }
  95% {left:100px; }
  100% {left:120px; }
}

@keyframes example3 {
  0% {left:40px; }
  5%  {left:10px; }
  10%  {left:40px; }
  15%  {left:70px; }
  20%  {left:90px; }
  25%  {left:110px; }
  35% {left:80px; }
  45%  {left:70px; }
  55%  {left:120px; }
  65%  {left:140px; }
  75%  {left:120px; }
  85% {left:70px; }
  95% {left:60px; }
  100% {left:20px; }
    }
`;