import React from "react";
import smallPhoto from "../../assets/images/Photo-small.webp";
import { Icon } from "../../components/icon/Icon";
import { ProgressBar } from "../../components/progressBar/ProgressBar";

export default function InfoBar() {
  return (
    <aside>
      <div>
        <img src={smallPhoto} alt="Rayan Adlardard Face" />
        <span></span>
        <h2>Rayan Adlardard</h2>
        <h2>Font-end Developer</h2>
      </div>
      <ul>
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
      </ul>
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
      <h2>Languages</h2>
      <ProgressBar nameSKill={"Bangla"} lvlSkill={"100%"} />
      <ProgressBar nameSKill={"English"} lvlSkill={"80%"} />
      <ProgressBar nameSKill={"Spanish"} lvlSkill={"60%"} />
      <hr />
      <h2>Skills</h2>
      <ProgressBar nameSKill={"Html"} lvlSkill={"90%"} />
      <ProgressBar nameSKill={"CSS"} lvlSkill={"85%"} />
      <ProgressBar nameSKill={"Js"} lvlSkill={"80%"} />
      <ProgressBar nameSKill={"PHP"} lvlSkill={"75%"} />
      <ProgressBar nameSKill={"WordPress"} lvlSkill={"85%"} />
      <hr />
      <h2>Extra Skills</h2>
      <Icon iconSrc={"codeSvg"} />
      <h3>Bootstrap, Materialize</h3>
      <Icon iconSrc={"codeSvg"} />
      <h3>Stylus, Sass, Less</h3>
      <Icon iconSrc={"codeSvg"} />
      <h3>Gulp, Webpack, Grunt</h3>
      <Icon iconSrc={"codeSvg"} />
      <h3>GIT Knowledge</h3>
    </aside>
  );
}
