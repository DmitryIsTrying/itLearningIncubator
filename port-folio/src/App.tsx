import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn, SuperButton } from "./components/Header/Button.styled";
import { Link } from "./components/Header/Link.styled";
import { Menu } from "./components/Header/Menu.styled";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
      <Menu>
        <ul>
          <li>
            <a href="!#">Menu item 1</a>
          </li>
          <li>
            <a href="!#">Menu item 2</a>
          </li>
          <li>
            <a href="!#">Menu item 3</a>
          </li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn fontWeight={100} as={Link} href={"#"}>
          Link
        </StyledBtn>
        <StyledBtn color="wheat" as="a" href={"#"}>
          Link
        </StyledBtn>
        <StyledBtn
          color={myTheme.colors.primary}
          btnType={"outline"}
          fontWeight={300}
        >
          Hello
        </StyledBtn>
        <StyledBtn
          color={myTheme.colors.secondary}
          shadowBtn
          btnType={"primary"}
          fontWeight={500}
        >
          Hello
        </StyledBtn>
        <SuperButton>Super Button</SuperButton>
        <input type="submit" value="submit-submit-submit" />
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;
