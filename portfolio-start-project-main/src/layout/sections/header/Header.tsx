import React from "react";
import { Icon } from "../../../components/icon/Icon";
import photoUrl from "../../../assets/images/Photo.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Header = () => {
  return (
    <div>
      <FlexWrapper align="center" justify="space-around">
        <h2>I’m Rayan Adlrdard</h2>
        <h1>
          <span>Front-end</span> Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <a href="#!">
          <span>HIRE ME</span>
          <Icon
            iconSrc={"hireMeBtnSvg"}
            width="16"
            height="16"
            viewBox="0 0 16 16"
          />
        </a>
        <Photo src={photoUrl} alt="Rayan Adlardard Face" />
      </FlexWrapper>
    </div>
  );
};

const Photo = styled.img`
  width: 325.72px;
  height: 459.09px;
`;
