import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin: auto;
`;

export const GridSectionCard = styled.section`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: space-between;
  grid-gap: 20px;
  padding: 25px;
  margin: auto;
`;

export const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #ffffcc;
  box-shadow: 0px 2px 5px #000000ff;
  border-radius: 8px;
  padding: 15px;
  text-decoration: none;
  &:hover {
    background-color: #ffffaa;
  }
`;

export const StyledCardTitle = styled.div`
  height: 90px;
`;

export const StyledTitle = styled.h3`
  color: #525e66;
  font-size: 1.25rem;
  &:hover {
    color: #32393d;
  }
`;
