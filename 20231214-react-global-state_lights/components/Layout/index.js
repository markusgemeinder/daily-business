import styled from "styled-components";
import Image from "next/image";

const StyledLayout = styled.div`
  color: white;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
  filter: ${({ $isDimmed }) => ($isDimmed ? "brightness(10%)" : "none")};
  transition: filter 1s;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  opacity: 0.3;
  user-select: none;
`;

const Content = styled.div`
  width: min(100% - 32px, 352px);
  margin: 0 auto;
  padding: 32px 0;
`;

export default function Layout({ children, isDimmed }) {
  console.log({ isDimmed });
  return (
    <StyledLayout>
      <Background $isDimmed={isDimmed}>
        <StyledImage src="/images/home.jpg" fill alt="" />
      </Background>
      <Content>{children}</Content>
    </StyledLayout>
  );
}
