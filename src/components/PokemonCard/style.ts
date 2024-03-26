import { PokemonSpeciesProps, PokemonTypesProps } from "@/types/Pokemon";
import { styled } from "styled-components";

export const StyledPokemonCard = styled.div<{
  color: PokemonSpeciesProps["color"];
}>`
  max-width: 300px;
  padding: ${({ theme }) => theme.spacing.xxs};
  border-radius: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => theme.colors.pokemon[`${color}`]};

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

export const StyledAbilities = styled.div`
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxs};

    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.xxs};
    }

    &.is_hidden svg {
      fill: ${({ theme }) => theme.colors.gray};
      width: ${({ theme }) => theme.fonts.size.xs};
      height: ${({ theme }) => theme.fonts.size.xs};
    }
  }
`;

export const StyledTypes = styled.div`
  border-radius: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.lightgray};
  overflow: hidden;

  .title {
    padding: ${({ theme }) => theme.spacing.xxs};
  }

  .list {
    display: flex;
  }
`;

export const StyledTypesItem = styled.li<{
  type: PokemonTypesProps["type"]["name"];
}>`
  width: 100%;
  min-width: 64px;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, type }) =>
    theme.colors.pokemon.types[`${type}`]};

  > span {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.xxs};
    text-align: center;

    img {
      display: block;
      margin: 0 auto;
    }
  }
`;
