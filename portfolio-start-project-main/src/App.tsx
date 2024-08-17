import "./App.css";
import InfoBar from "./layout/infoBar/InfoBar";
import { NavBar } from "./layout/navBar/NavBar";
import { Header } from "./layout/sections/header/Header";

function App() {
  return (
    <div className="App">
      <InfoBar />
      <main>
        {/* <Header /> */}
        <section></section>
        <section></section>
        <section></section>
      </main>
      <NavBar />
    </div>
  );
}

export default App;
