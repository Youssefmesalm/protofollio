import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Theme";
import GlobalStyle from "./styles/GlobaStyle";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={light}>
       
          <>
            <Layout />
          </>
        <GlobalStyle/>
      </ThemeProvider>
    );
  }
}

export default App;
