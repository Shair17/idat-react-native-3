import reactLogo from "./assets/react.svg";
import "./App.css";
import { Base } from "./Base";
import { Calculadora } from "./Calculadora";

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      {/* <Base /> */}
      <Calculadora />
    </>
  );
}

export default App;
