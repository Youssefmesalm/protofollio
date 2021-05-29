import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={dark}>
       
          <>
            <Layout />
          </>
        <GlobalStyle/>
      </ThemeProvider>
    );
  }
}

export default App;
