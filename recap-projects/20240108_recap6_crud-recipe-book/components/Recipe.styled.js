import styled from "styled-components";

export const GridRecipeContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  background-color: #ffffcc;
  box-shadow: 0px 2px 5px #000000ff;
  border-radius: 8px;
  padding: 10px 30px 10px 30px;
  margin: auto;
  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const GridRecipeLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  justify-content: flex-start;
  padding: 10px;
  align-items: flex-start; // Add this line
`;

export const GridRecipeRightColumn = styled(GridRecipeLeftColumn)`
  align-items: left;
  text-align: left;
`;

export const StyledRecipeTitle = styled.h2`
  color: #525e66;
  font-size: 1.6rem;
  overflow-wrap: break-word;
`;

export const StyledRecipeSubtitle = styled.h3`
  color: #525e66;
  font-size: 1.2rem;
`;

export const StyledUnorderedList = styled.li`
  line-height: 1rem; // Adjust line spacing
  margin-bottom: 0.5rem; // Adjust spacing between list items
  padding-left: 1rem; // Adjust the indentation
`;

export const StyledOrderedList = styled.li`
  line-height: 1rem; // Adjust line spacing
  margin-bottom: 0.8rem; // Adjust spacing between list items
  padding-left: 1rem; // Adjust the indentation
`;
