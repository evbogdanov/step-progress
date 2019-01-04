import React, { Component } from "react";
import Progress from "../Progress/Progress";
import styled from "styled-components";

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  font-family: sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Progress steps={["Un", "Deux", "Trois", "Quatre"]} />
      </StyledApp>
    );
  }
}

export default App;
