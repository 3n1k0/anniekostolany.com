import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { colors } from "./config";
import { fonts } from './config'

export const Button = styled(NavLink)`
  border: 2px solid #1f1f1f;;
  background: transparent;
  color: ${colors.cimek};
  height: 42px;
  width: 220px;
  letter-spacing: 1.5px;
  padding: 20px;
  text-transform: uppercase;
  font-family: ${fonts.mindenmas};
  margin: 0 auto;
  width: 190px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;



  &:hover {
    background: #1f1f1f;;
    color: ${colors.tortfeher};
    transition: 0.6s;
  }

  a:visited {
    color: #1f1f1f;;
  }

  a:visited:hover {
    color: ${colors.tortfeher};
  }
`;
