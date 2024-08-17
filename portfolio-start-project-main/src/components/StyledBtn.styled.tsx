import React from "react";
import styled from "styled-components";

type StyledBtnPropsType = {
  gap?: string;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  width: 100%;
  border: none;
  gap: ${(props) => props.gap || 0};
  background-color: #ffb400;
  cursor: pointer;
`;
