import styled from 'styled-components';

export const HomeSC = styled.div`
  width: 100%;

  > main {
    max-width: 1120px;
    margin: 3.2rem auto 14.8rem;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 25.6rem 1fr;
    align-items: flex-start;
    gap: 3.2rem;
  }

  @media (max-width: 768px) {
    > main {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContentSC = styled.div`
  display: grid;
  gap: 3.2rem;
`;