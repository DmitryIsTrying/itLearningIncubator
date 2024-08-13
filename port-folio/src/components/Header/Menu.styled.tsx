import styled from "styled-components";

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: #110f0f;
      text-decoration: none;
      font-weight: 900;
      font-size: 2rem;
    }

    li + li {
      margin-left: 20px;
    }
  }
`;
