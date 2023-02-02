import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  svg {
    animation: rotate 2s linear infinite;
    width: 200px;
    height: 200px;
  }

  svg circle {
    animation: dash 1s ease-in-out infinite;
    stroke-linecap: round;
    stroke: ${(props) => props.theme["green-300"]};
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
