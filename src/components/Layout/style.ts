import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  h1 {
    text-align: center;
  }

  .page-wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  .menu {
    ul {
      list-style: none;

      li {
        padding: ${({ theme }) => theme.spacing.xxs};
        border: 1px solid ${({ theme }) => theme.colors.gray};
        border-radius: ${({ theme }) => theme.spacing.xxs};
        background-color: ${({ theme }) => theme.colors.lightgray};

        &:not(:last-child) {
          margin-bottom: ${({ theme }) => theme.spacing.xxs};
        }

        &.is_active {
          background-color: ${({ theme }) => theme.colors.semantic.primary};
          a {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }

      a {
        color: ${({ theme }) => theme.colors.semantic.default};
        font-size: ${({ theme }) => theme.fonts.size.sm};
        white-space: nowrap;
      }
    }
  }
`;
