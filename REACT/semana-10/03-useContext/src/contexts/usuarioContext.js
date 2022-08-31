import { createContext, useContext, useState } from "react";

const UsuarioContext = createContext();

// Irá abraçar os componentes que irão compartilhar os dados
const UsuarioProvider = ({ children }) => {
  const [tipoDePlano, setTipoDePlano] = useState("free");

  return (
    <UsuarioContext.Provider
      value={{
        nome: "Rosana Rezende",
        tipoDePlano,
        alteraTipoDePlano: (tipoDePlano) => {
          setTipoDePlano(tipoDePlano);
        },
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

// Permite usar os dados dentro de cada componente
const useUsuario = () => {
  return useContext(UsuarioContext);
};

export { UsuarioProvider, useUsuario };
