import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  h1 {
    text-align: center;
  }
`;
