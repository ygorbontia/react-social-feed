import styled from 'styled-components';

export const CommentSC = styled.div`
  margin-top: 2.4rem;

  display: flex;
  gap: 1.6rem;
`;

export const CommentBoxSC = styled.div`
  flex: 1;

  > footer {
    margin-top: 1.6rem;

    button {
      background-color: transparent;
      border: none;
      border-radius: 2px;

      display: flex;
      align-items: center;

      cursor: pointer;

      color: ${({ theme }) => theme.colors.gray_400};

      svg {
        margin-right: .8rem;
      }

      > span::before {
        content: "•";
        padding: 0 .4rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.green_300};
      }
    }
  }
`;

export const ContentSC = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 8px;
  padding: 1.6rem;

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1.4rem;
        line-height: 1.6;
      }

      time {
        font-size: 1.2rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.gray_400};
      }
    }

    > button {
      background-color: transparent;
      border: none;
      border-radius: 2px;

      cursor: pointer;
      
      line-height: 0;
      color: ${({ theme }) => theme.colors.gray_400};

      &:hover {
        color: ${({ theme }) => theme.colors.red_500};
      }
    }
  }

  > p {
    margin-top: 1.6rem;

    color: ${({ theme }) => theme.colors.gray_300};
  }
`;