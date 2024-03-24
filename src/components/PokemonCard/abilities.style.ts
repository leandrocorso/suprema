import styled from "styled-components";

export const StyledAbilities = styled.div`
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xxs};

    &.isHidden svg {
      fill: ${({ theme }) => theme.colors.gray};
      width: ${({ theme }) => theme.fonts.size.xs};
      height: ${({ theme }) => theme.fonts.size.xs};
    }
  }
`;
