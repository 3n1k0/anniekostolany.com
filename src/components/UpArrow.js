import styled from "styled-components/macro";
import React from "react";

export const UpArrow = () => {
  const UpArrowWrapper = styled.div`
    bottom: 80px;
    font-size: 60px;
    cursor: pointer;
    opacity: 0.7;
    position: sticky;
    text-align: right;
    margin-right: 30px;
    z-index: 1;
  `;

  return (
    <UpArrowWrapper
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i class="fas fa-chevron-circle-up"></i>
    </UpArrowWrapper>
  );
};
