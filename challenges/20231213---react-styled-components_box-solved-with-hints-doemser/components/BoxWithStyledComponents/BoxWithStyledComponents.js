import styled from "styled-components";

// const StyledBox = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
//   margin: 2rem;
//   &:hover {
//     background-color: red;
//   }
// `;

// // ========================= HINT
// // higher order component: in this case only useful for renaming
// // the isBlack prop to $isBlack to prevent the prop from being passed
// // to the DOM

// export default function BoxWithStyledComponents({ isBlack, ...props }) {
//   return <StyledBox {...props} $isBlack={isBlack}></StyledBox>;
// }

// ========================= BONUS PART OF CHALLENGE

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || "black"};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponents({ backgroundColor, ...props }) {
  return <StyledBox {...props} $backgroundColor={backgroundColor}></StyledBox>;
}

// ========================= shortcut to comment or uncomment
// ========================= lines in VSC >>> [Cmd]+[Shift]+[7]
