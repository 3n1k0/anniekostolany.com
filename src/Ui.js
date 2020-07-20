import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { colors } from "./config";

export const Button = styled(NavLink)`
  border: 2px solid black;
  background: transparent;
  color: black;
  height: 42px;
  width: 101px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1em;
  padding: 0;
  margin: 0 auto;
  width: 190px;
  margin: 35px;
  cursor: pointer;

  &:hover {
    background: black;
    color: ${colors.tortfeher};
    transition: 0.6s;
  }

  a:visited {
    color: black;
  }

  a:visited:hover {
    color: ${colors.tortfeher};
  }
`;
