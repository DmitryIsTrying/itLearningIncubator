import React from "react";
import styled from "styled-components";

type StyledSecondaryTextPropsType = {
  color?: string;
};

export const StyledSecondaryText = styled.p<StyledSecondaryTextPropsType>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${(props) => props.color || "#767676"};
`;
