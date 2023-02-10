import styled from "styled-components";

export const Content = styled.button`
  background-color: ${(props) => props.theme["green-300"]};
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`;
