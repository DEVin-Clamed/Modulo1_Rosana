import './App.css';
import Soma from './components/Soma';

function App() {
  return (
    <div>
      {/* Envio de props: maneira esperada */}
      {/* <Soma numero1={10} numero2={20} /> */}

      {/* Envio de props: maneira não esperada */}
      {/* <Soma numero1="10" numero2="20" /> */}

      {/* Não enviada uma prop (numero2) */}
      <Soma numero1={10} />
    </div>
  );
}

export default App;
