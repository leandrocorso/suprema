import styled from "styled-components";

export const StyledTypes = styled.div`
  width: 128px;
  border-radius: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.lightgray};
  overflow: hidden;

  .title {
    padding: ${({ theme }) => theme.spacing.xxs};
  }

  .list {
    display: flex;
  }

  .item {
    width: 100%;
    display: flex;
    color: ${({ theme }) => theme.colors.white};
  }

  .item span {
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
