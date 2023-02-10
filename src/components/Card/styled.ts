import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 275px;
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 8px;

  img {
    border-radius: 0.3rem;
    align-self: center;
    margin: 0.5rem 0;
  }

  strong {
    font-size: 1rem;
  }

  h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
  }
  span {
    font-size: 0.9rem;
    text-align: center;
  }

  p {
    margin: 5px 0;
    font-size: 0.9em;
  }
`;
