import React from "react";
import Navbar from "../Navbar";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  height: 1000vh;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{ background: "rgb(9, 6, 10)" }} />

        <Container>
          <h1>Hello PORTFOLIO PAGE</h1>
        </Container>
      </div>
    );
  }
}
export default Portfolio;
