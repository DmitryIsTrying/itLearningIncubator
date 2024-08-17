import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const NavBar = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledBtn>
            <Icon
              iconSrc={"darkLightNavSvg"}
              width="25"
              height="25"
              viewBox="0 0 25 25"
            />
          </StyledBtn>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"homeNavSvg"}
              width="18"
              height="15"
              viewBox="0 0 18 15"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"serviceNavSvg"}
              width="16.5"
              height="18"
              viewBox="0 0 16.5 18"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"cvNavSvg"}
              width="17"
              height="18"
              viewBox="0 0 17 18"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"portfolioNavSvg"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"iconDribbbleNavSvg"}
              width="14"
              height="16"
              viewBox="0 0 14 16"
            />
          </a>
        </li>
        <li>
          <a href="#!">
            <Icon
              iconSrc={"messageNavSvg"}
              width="16"
              height="15"
              viewBox="0 0 16 15"
            />
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #fafafa;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  min-width: fit-content;
  max-width: 108px;
  width: 5%;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 43px;
    justify-content: center;
    align-items: center;
  }
  li {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 11px;
      background-color: #f0f0f6;
      border-radius: 50%;
      @media (hover: hover) {
        transition: 0.5s ease;
        &:hover {
          background-color: #ffb400;
          svg {
            fill: #2b2b2b;
          }
        }
      }

      @media (hover: none) {
        transition: 0.1s ease;
        &:active {
          background-color: #ffb400;
          svg {
            fill: #2b2b2b;
          }
        }
      }
    }
  }
  li:nth-child(1) {
    margin-top: 50px;
    margin-bottom: 169px;
    width: 25px;
    height: 25px;
  }
`;

const StyledBtn = styled.button`
  display: flex;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
