import React from "react";
import styled from "styled-components";

type ProgressBarPropsType = {
  nameSKill: string;
  lvlSkill: string;
};

type MySkillBarPropsType = {
  lvlSkill: string;
};

export const ProgressBar = (props: ProgressBarPropsType) => {
  return (
    <StyledWrapperSkill>
      <StyledWrapperText as={StyledWrapperSkill}>
        <StyledNameSkill>{props.nameSKill}</StyledNameSkill>
        <StyledLvlText as={StyledNameSkill}>{props.lvlSkill}</StyledLvlText>
      </StyledWrapperText>
      <FullSkillBar>
        <MySkillBar lvlSkill={props.lvlSkill} />
      </FullSkillBar>
    </StyledWrapperSkill>
  );
};

const StyledWrapperSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledWrapperText = styled.div`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StyledNameSkill = styled.h3`
  color: #767676;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const StyledLvlText = styled.span``;

const FullSkillBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: 0.5px solid #ffb400;
  border-radius: 30px;
`;

const MySkillBar = styled.div<MySkillBarPropsType>`
  margin: 1px;
  width: ${(props) => props.lvlSkill};
  height: 2px;
  background-color: #ffb400;
  border-radius: 30px;
`;
