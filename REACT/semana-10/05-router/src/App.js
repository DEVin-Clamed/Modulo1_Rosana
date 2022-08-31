import { BrowserRouter } from "react-router-dom";

import { Cabecalho } from "./components";

import { Rotas } from './routes/Rotas'

function App() {

  return (
    <BrowserRouter>
      <Cabecalho />
      
      <Rotas />      
    </BrowserRouter>
  );
}

export default App;
