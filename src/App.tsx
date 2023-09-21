import "./App.css";
import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const aumentaContador = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const reduzContador = () => {
    setContador((prevContador) => prevContador - 1);
  };

  return (
    <div className="App">
      <h1>Contador: {contador}</h1>
      <div className="button-container">
      <button className="Button" onClick={aumentaContador}>
        +
      </button>
      <button className="Button" onClick={reduzContador}>
        -
      </button>
      </div>
    </div>
  );
};

export default App;
