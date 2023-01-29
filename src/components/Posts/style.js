import styled from 'styled-components';

export const PostsSC = styled.article`
  background-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: .8rem;
  padding: 4rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    time {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.gray_400};
    }
  }
`;

export const ProfileSC = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.gray_100};
    }

    span {
      font-size: 1.4rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.gray_400};
    }
  }
`;

export const ContentSC = styled.div`
  margin-top: 2.4rem;
  
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray_300};

  > p {
    margin-top: 1.6rem;

    a {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.green_500};
      text-decoration: none;

      &:hover {
      color: ${({ theme }) => theme.colors.green_300};
      }
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: .6rem;
  }
`;

export const PublicationSC = styled.form`
  width: 100%;
  border-top: solid 1px ${({ theme }) => theme.colors.gray_600};
  margin-top: 2.4rem;
  padding-top: 2.4rem;

  > strong {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > textarea {
    width: 100%;
    height: 9.6rem;
    background-color: ${({ theme }) => theme.colors.gray_900};
    border: none;
    border-radius: 8px;
    margin-top: 1.6rem;
    padding: 1.6rem;

    resize: none;

    line-height: 1.4;
    color: ${({ theme }) => theme.colors.gray_100};

  }

  // Sumindo a DIV que possui o botão de publicar/comentar
  > div {
    visibility: hidden;
    max-height: 0;

    button {
      background-color: ${({ theme }) => theme.colors.green_500};
      border: none;
      border-radius: 8px;
      margin-top: 1.6rem;
      padding: 1.6rem 2.4rem;

      transition: background-color .2s;

      cursor: pointer;

      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.green_300};
      }
    }
  }

  // Exibindo a DIV que possui o botão de publicar/comentar quando estiver com foco no formulário (CommentSC)
  &:focus-within div {
    visibility: visible;
    max-height: none;
  }
`;

export const CommentListSC = styled.div`
  margin-top: 3.2rem;
`;