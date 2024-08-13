import React from "react";

type HeaderPropsType = {
    value: number
    next: boolean
}

function Header(props: HeaderPropsType) {
  if (props.value === 1 && props.next === true) {
    return <h1>This is not test!</h1>;
  } else if (props.next === false) {
    return <h1>This is test!</h1>;
  }

  return <h1>Tse!</h1>;
}

export default Header;
