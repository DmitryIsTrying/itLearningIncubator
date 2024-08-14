import styled, { css } from "styled-components";
import { MyAnimation } from "../../styles/animations/Animations";

type StyledBtnPropsType = {
  color?: string;
  fontWeight?: number;
  btnType?: "outline" | "primary";
  shadowBtn?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 2rem;
  font-weight: ${({ fontWeight }) => fontWeight || 900};
  transition: 1s;

  //outline
  ${(props) =>
    props.btnType === "outline" &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "red"};
      color: ${(props) => props.color || "red"};
      background-color: transparent;

      &:hover {
        border-color: #338b4e;
        color: #338b4e;
        background-color: transparent;
      }
    `}
  //primary
${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "red"};
      color: snow;

      &:hover {
        background-color: #561fbb;
      }
    `}
  //shadowBtn
${(props) =>
    props.shadowBtn &&
    css<StyledBtnPropsType>`
      &:hover {
        box-shadow: 0px 0px 10px 10px inset rgba(186, 178, 201, 0.482);
        color: ${(props) => props.color};
      }
    `}
`;

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  color: #242323;
  background-color: #8b3337;

  &:hover {
    animation: ${MyAnimation} 2s linear;
    background-color: #0f748d;
  }
`;
