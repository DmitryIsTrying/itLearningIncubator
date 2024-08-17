import React from "react";
import { Icon } from "../../../components/icon/Icon";
import photoUrl from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledPrimaryText } from "../../../components/PrimaryText.styled";
import { StyledSecondaryText } from "../../../components/SecondaryText.styled";

export const Header = () => {
  return (
    <>
      <FlexWrapper align="center">
        <FlexWrapper direction="column">
          <h2>I’m Rayan Adlrdard</h2>
          <h1>
            <span style={{ color: "#FFB400" }}>Front-end</span> Developer
          </h1>
          <StyledSecondaryText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </StyledSecondaryText>
          <StyledLinkText href="#!">
            <StyledPrimaryText>HIRE ME</StyledPrimaryText>
            <Icon
              iconSrc={"hireMeBtnSvg"}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            />
          </StyledLinkText>
        </FlexWrapper>
        <Photo src={photoUrl} alt="Rayan Adlardard Face" />
      </FlexWrapper>
    </>
  );
};

const StyledLinkText = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
`;

const Photo = styled.img`
  width: 325.72px;
  height: 459.09px;
`;
