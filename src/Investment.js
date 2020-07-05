import React, { useState } from "react";
import Navbar from "./Navbar";
import styled, { createGlobalStyle, css } from "styled-components/macro";
import { Helmet } from 'react-helmet'

const Container = styled.div`
  height: 1000vh;
  width: 100%;
`;

class Investment extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Investment</title>
          <meta
            name="description"
            content="Amsterdam based photographer - investment & packages"
          />
        </Helmet>
        <Navbar style={{ background: "black" }} />

        <Container>
          <h1>Hello Preset shop</h1>
        </Container>
      </div>
    );
  }
}
export default Investment;
