import styled from 'styled-components';

export const SideBarSC = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 8px;

  overflow: hidden;

  > img {
    width: 100%;
    height: 7.2rem;

    object-fit: cover;
  }
  
  > footer {
    border-top: 1px solid ${({ theme }) => theme.colors.gray_600};
    margin-top: 2.4rem;
    padding: 2.4rem 3.2rem 3.2rem;

    a {
      width: 100%;
      height: 5rem;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.green_500};
      border-radius: 8px;
      padding: 0 2.4rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      font-weight: bold;
      color: ${({ theme }) => theme.colors.green_500};
      text-decoration: none;

      transition: color .2s, background-color .2s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.green_500};

        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const ProfileSC = styled.div`
  margin-top: calc(-2.4rem - 6px);

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: calc(4.8rem + 12px);
    height: calc(4.8rem + 12px);
    border-radius: 8px;
    border: 4px solid ${({ theme }) => theme.colors.gray_800};
    
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
  }

  > strong {
    margin-top: 1.6rem;

    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray_100};
  }

  > span {
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray_400};
  }
`;