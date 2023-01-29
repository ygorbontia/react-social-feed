import styled from 'styled-components';

export const AvatarSC = styled.div`
  .has-border {
    width: calc(4.8rem + 12px);
    height: calc(4.8rem + 12px);
    border-radius: 8px;
    border: 4px solid ${({ theme }) => theme.colors.gray_800};
    
    outline: 2px solid ${({ theme }) => theme.colors.green_500};
  }

  .no-border {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 8px;
  }
`;