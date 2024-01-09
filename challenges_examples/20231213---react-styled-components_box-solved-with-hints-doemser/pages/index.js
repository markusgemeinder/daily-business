import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents";
import FlexContainer from "@/components/FlexContainer/FlexContainer";

// export default function HomePage({ isBlack }) {
//   return (
//     <FlexContainer>
//       <BoxWithStyledComponents isBlack />
//       <BoxWithStyledComponents />
//       <BoxWithStyledComponents />
//     </FlexContainer>
//   );
// }

// ========================= BONUS PART OF CHALLENGE

export default function HomePage({ backgroundColor }) {
  return (
    <FlexContainer>
      <BoxWithStyledComponents backgroundColor="salmon" />
      <BoxWithStyledComponents backgroundColor="blue" />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents backgroundColor="purple" />
    </FlexContainer>
  );
}

// ========================= shortcut to comment or uncomment
// ========================= lines in VSC >>> [Cmd]+[Shift]+[7]
