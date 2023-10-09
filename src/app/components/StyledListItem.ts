import styled from "styled-components";

export const StyledListItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid blue;
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: gold;

  &:hover {
    background-color: #00002c;
    color: cyan;
  }
`;
