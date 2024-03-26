import { styled } from "styled-components";

export const StyledPokemonListWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};

  .loading {
    margin: 0 auto;
  }
`;

export const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  width: fit-content;
  margin: 0 auto;
`;
