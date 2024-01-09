import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 2rem;
`;

export default function QuickActions({ onTurnAllOff, onTurnAllOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          // console.log("Turn all lights on");
          onTurnAllOn();
        }}
      >
        Turn all lights on
      </Button>
      <Button
        type="button"
        onClick={() => {
          // console.log("Turn all lights off")
          onTurnAllOff();
        }}
      >
        Turn all lights off
      </Button>
    </StyledQuickActions>
  );
}
