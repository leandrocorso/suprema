import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  height: ${({ theme }) => theme.spacing.xxl};

  ul {
    list-style: none;
    display: inline-flex;
    gap: ${({ theme }) => theme.spacing.lg};
    height: 100%;
  }

  li {
    display: flex;
    align-items: center;

    &.is-active {
      background-color: ${({ theme }) => theme.colors.semantic.default};
      border-bottom-left-radius: ${({ theme }) => theme.spacing.md};
      border-bottom-right-radius: ${({ theme }) => theme.spacing.md};

      a {
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.spacing.md};
      }
    }
  }

  a {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    color: ${({ theme }) => theme.colors.semantic.default};
  }
`;
