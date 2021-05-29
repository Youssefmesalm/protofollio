import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
html {
  font-weight: 100;
  font-size: ${({ theme }) => theme.fonts.sizes.initial};
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
  color:${({ theme }) => theme.colors.text} ;
  background: ${({ theme }) => theme.colors.background};
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: ${({ theme }) => theme.fonts.family.base};

}

html,
body,
#app {
  height: 100%;
  width: 100%;
  
}


a:hover {
  color: inherit;
  text-decoration: none;
}

th {
  font-weight: 600;
}

td {
  font-weight: 300;
}

label {
  font-weight: 400;
}

strong {
  font-weight: 700;
}

ul ul,
ol ul {
  list-style: none;
}

ul,
ol {
  list-style: none;
  padding-left: 0;
}


`;

export default GlobalStyle;