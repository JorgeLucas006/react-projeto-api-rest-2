import "./App.css";
import api from "./services/api";
import Card from "./components";
import InputMask from "react-input-mask";
import { useState } from "react";

function App() {
  const [cep, setCep] = useState("");
  const [obj, setObj] = useState({});

  const handleChangeInput = (e) => {
    //const { value, maxLength } = e.target;
    //setCep(value.slice(0, maxLength));
    setCep(e.target.value);
  };

  const searchCep = () => {
    let url = cep + "/json";
    api.get(url).then((res) => {
      if (!res.data.error) {
        setObj(res.data);
      } else {
        setObj();
        window.alert("Cep digitado errado!");
      }
    });
  };

  return (
    <div>
      <div className="search">
        <h1>Consultar CEP</h1>
        <InputMask mask="99999-999" onChange={(e) => setCep(e.target.value)} />
        <button onClick={searchCep}>Procurar</button>
      </div>
      <Card>{obj}</Card>
    </div>
  );
}

export default App;
