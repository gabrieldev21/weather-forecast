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
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 0.7rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  img {
    border-radius: 0.3rem;
    align-self: center;
    margin: 0.5rem 0;
  }

  strong {
    font-size: 1rem;
  }

  h3 {
    text-align: center;
    margin: 0 0 0.3rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
    padding-bottom: 0.4rem;
  }
  span {
    padding-right: 0.2rem;
    font-size: 0.9rem;
    text-align: end;
  }

  p {
    margin: 0.3rem 0;
    font-size: 1rem;
  }
`;
