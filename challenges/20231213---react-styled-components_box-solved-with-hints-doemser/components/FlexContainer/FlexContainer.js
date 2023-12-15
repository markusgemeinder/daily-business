import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 10px;
  background-color: yellow;
`;

// ========================= HINT
// no need of function wrapping, as no prop will be passed
// instead of 'StyledFlexContainer' just name 'FlexContainer'
// and export as const

// export default function FlexContainer({ ...props }) {
//   return <StyledFlexContainer {...props}></StyledFlexContainer>;
// }

export default FlexContainer;
