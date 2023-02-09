import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;

  button {
    cursor: pointer;
    padding: 0.5rem;
    width: 25%;
    border-radius: 0.5rem;
    color: ${(props) => props.theme["gray-700"]};
    background: ${(props) => props.theme["white"]};
    border: ${(props) => props.theme["gray-700"]};

    &:hover {
      filter: brightness(0.9);
    }

    transition: filter 0.2s;
  }
`;
