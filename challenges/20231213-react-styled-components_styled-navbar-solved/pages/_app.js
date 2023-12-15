import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px lightgreen;
  background-color: yellow;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: lightcoral;
  text-decoration: none;
  &:hover {
    color: green;
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* render GlobalStyle first */}
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
      </StyledNav>
      {/* render Component {...pageProps} second */}
      <Component {...pageProps} />
    </>
  );
}
