import React from "react";

type AccordionPropsType = {
  value?: 1 | "a" | "none";
};

export function Accordion(props: AccordionPropsType) {
  if (props.value === 1) {
    return (
      <select id="select">
        <option>1</option>
        <option>2</option>
        <option selected>3</option>
      </select>
    );
  }
  if (props.value === "a") {
    return (
      <select id="select">
        <option>A</option>
        <option>B</option>
        <option selected>C</option>
      </select>
    );
  } else {
    return null;
  }
}
