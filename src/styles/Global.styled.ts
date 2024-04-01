import { createGlobalStyle } from "styled-components";
interface Theme {
  theme: {
    colors: {
      [key: string]: string;
    };
  };
}

export const GlobalContainer = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color:  ${({ theme }: Theme) => theme.colors.body_bg};
  font-family: "Roboto", sans-serif;
}

.main {
  max-width: 51.6rem;
  margin: 4rem auto;
}

html {
  font-size: 62.5%;
}

img {
  max-width: 100%;
}

.error {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.error};
  }

@media (min-width: 112.5em) {
  html {
    font-size: 75%;
  }
}

@media (min-width: 160em) {
  html {
    font-size: 100%;
  }
}

@media (max-width: 48em) {
  html {
    font-size: 50%;
  }

  .main {
    margin-top: 5rem;
    max-width: 90%;
  }
}
`;
