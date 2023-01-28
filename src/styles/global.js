import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_500};

    outline: transparent;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray_900};

    color: ${({ theme }) => theme.colors.gray_300};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`;