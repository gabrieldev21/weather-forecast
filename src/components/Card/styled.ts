import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  max-width: 275px;
  background-color: ${(props) => props.theme["green-700"]};
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 8px;

  img {
    border-radius: 0.3rem;
    align-self: center;
  }

  h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
  }

  p {
    margin: 5px 0;
    font-size: 0.9em;
  }
`;
