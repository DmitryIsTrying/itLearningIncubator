import styled from "styled-components";
import { MyAnimation } from "../../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: #338b4e;
  }

  &:last-child {
    background-color: #4a338b;
  }

  &:hover:last-child {
    background-color: #338b4e;
  }
`;

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #fbf83f;
  color: #242323;

  &:hover {
    animation: ${MyAnimation} 2s linear;
  }
`;
