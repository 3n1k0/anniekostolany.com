import styled from "styled-components/macro";
import React from "react";

export const FixedUpArrow = () => {
  const UpArrowWrapper = styled.div`
    font-size: 60px;
    cursor: pointer;
    position: fixed;
    text-align: center;
    position: relative;
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
