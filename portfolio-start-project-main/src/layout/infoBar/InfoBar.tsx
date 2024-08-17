import React from "react";
import smallPhoto from "../../assets/images/Photo-small.webp";
import { Icon } from "../../components/icon/Icon";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn.styled";
import { StyledPrimaryText } from "../../components/PrimaryText.styled";
import { StyledSecondaryText } from "../../components/SecondaryText.styled";
import { FlexWrapper } from "../../components/FlexWrapper";

export default function InfoBar() {
  return (
    <StyledAside
      as={FlexWrapper}
      direction="column"
      align="center"
      justify="space-between"
    >
      <FlexWrapper direction="column" align="center">
        <ProfileImg src={smallPhoto} alt="Rayan Adlardard Face" />
        <span></span>
        <StyledPrimaryText>Rayan Adlardard</StyledPrimaryText>
        <StyledSecondaryText>Font-end Developer</StyledSecondaryText>
      </FlexWrapper>
      <FlexWrapper as={"ul"} style={{ listStyle: "none" }}>
        <li>
          <Icon
            iconSrc={"iconFbSvg"}
            width="18"
            height="18"
            viewBox="0 0 18 18"
          />
        </li>
        <li>
          <Icon
            iconSrc={"iconInstaSvg"}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          />
        </li>
        <li>
          <Icon
            iconSrc={"iconTwSvg"}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          />
        </li>
        <li>
          <Icon
            iconSrc={"iconLndSvg"}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          />
        </li>
        <li>
          <Icon
            iconSrc={"iconYtSvg"}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          />
        </li>
        <li>
          <Icon
            iconSrc={"adPopUpSvg"}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          />
        </li>
      </FlexWrapper>
      <hr />
      <div>
        <span>Age:</span>
        <h3>24</h3>
      </div>
      <div>
        <span>Residence:</span>
        <h3>BD</h3>
      </div>
      <div>
        <span>Freelance:</span>
        <h3>Available</h3>
      </div>
      <div>
        <span>Address:</span>
        <h3>Dhaka,Bangladesh</h3>
      </div>
      <hr />
      <FlexWrapper direction="column" align="flex-start">
        <h2>Languages</h2>
        <ProgressBar nameSKill={"Bangla"} lvlSkill={"100%"} />
        <ProgressBar nameSKill={"English"} lvlSkill={"80%"} />
        <ProgressBar nameSKill={"Spanish"} lvlSkill={"60%"} />
      </FlexWrapper>
      <hr />
      <FlexWrapper direction="column" align="flex-start">
        <h2>Skills</h2>
        <ProgressBar nameSKill={"Html"} lvlSkill={"90%"} />
        <ProgressBar nameSKill={"CSS"} lvlSkill={"85%"} />
        <ProgressBar nameSKill={"Js"} lvlSkill={"80%"} />
        <ProgressBar nameSKill={"PHP"} lvlSkill={"75%"} />
        <ProgressBar nameSKill={"WordPress"} lvlSkill={"85%"} />
      </FlexWrapper>
      <hr />
      <FlexWrapper direction="column" align="flex-start">
        <StyledPrimaryText>Extra Skills</StyledPrimaryText>
        <FlexWrapper gap="15px" align="center">
          <Icon
            iconSrc={"ExtraSkillsSvg"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
          <StyledSecondaryText>Bootstrap, Materialize</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper gap="15px" align="center">
          <Icon
            iconSrc={"ExtraSkillsSvg"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
          <StyledSecondaryText>Stylus, Sass, Less</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper gap="15px" align="center">
          <Icon
            iconSrc={"ExtraSkillsSvg"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
          <StyledSecondaryText>Gulp, Webpack, Grunt</StyledSecondaryText>
        </FlexWrapper>
        <FlexWrapper gap="15px" align="center">
          <Icon
            iconSrc={"ExtraSkillsSvg"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
          <StyledSecondaryText>GIT Knowledge</StyledSecondaryText>
        </FlexWrapper>
      </FlexWrapper>
      <hr />
      <StyledBtn>
        <StyledTextBtn>Download cv</StyledTextBtn>
        <Icon
          iconSrc={"BtnCvLoadSvg"}
          width="12"
          height="13"
          viewBox="0 0 12 13"
        />
      </StyledBtn>
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  padding: 50px 45px 25px 40px;
  max-width: 305px;
  background-color: #ffffff;
  height: 100dvh;
  /* position: fixed;
  top: 0;
  left: 0; */
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StyledTextBtn = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  text-align: left;
  color: #2b2b2b;
`;
