import styled from 'styled-components';

export const HeaderSC = styled.header`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.gray_800};
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 3.2rem;
  }
`;