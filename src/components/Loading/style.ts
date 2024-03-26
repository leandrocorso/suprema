import { styled } from "styled-components";

export const StyledLoading = styled.div`
  width: 32px;
  height: 32px;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    animation-name: spin;
    animation-duration: 350ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
