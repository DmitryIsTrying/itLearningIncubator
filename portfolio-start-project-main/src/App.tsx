import "./App.css";
import styled from "styled-components";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Title>
        Welcome to <span>IT</span>-INCUBATOR
      </Title>
      <Form>
        <Field />
        <Field placeholder="Enter the name" title="hello!" />
        <Field disabled />
      </Form>
      <Accordion value={1} />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #0f0e0f;
  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs((props) => ({
  type: "text",
  name: "radioBtn",
  placeholder: props.placeholder || "Type smth...",
  disabled: props.disabled || false,
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;
