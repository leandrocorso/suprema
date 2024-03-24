import { styled } from "styled-components";

export const StyledPokemonCard = styled.div`
  max-width: 300px;
  padding: ${({ theme }) => theme.spacing.xxs};
  border-radius: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pokemon.green};

  .heading {
    padding-left: ${({ theme }) => theme.spacing.md};
    padding-right: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .content {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: 0;
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.spacing.md};
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.white} 0%,
      ${({ theme }) => theme.colors.lightgray} 63%,
      rgba(220, 220, 220, 1) 63%,
      ${({ theme }) => theme.colors.white} 70%
    );
  }

  .artwork {
    display: block;
    margin: 0 auto;
  }

  .data-wrapper {
    display: flex;
    justify-content: space-between;

    > div {
      font-size: ${({ theme }) => theme.fonts.size.sm};

      h5 {
        font-size: ${({ theme }) => theme.fonts.size.sm};
      }
    }
  }
`;
