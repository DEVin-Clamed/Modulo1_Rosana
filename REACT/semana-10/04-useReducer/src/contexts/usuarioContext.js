import { createContext, useContext, useCallback, useState } from "react";

const UsuarioContext = createContext();

// Irá abraçar os componentes que irão compartilhar os dados
const UsuarioProvider = ({ children }) => {
  const [tipoDePlano, setTipoDePlano] = useState("free");

  return (
    <UsuarioContext.Provider
      value={{
        nome: "Rosana Rezende",
        tipoDePlano,

        // useCallback é um hook que permite que o valor do planType seja atualizado sem que o componente seja recarregado
        alteraTipoDePlano: useCallback(
          (tipoDePlano) => {
            setTipoDePlano(tipoDePlano);
          },
          [setTipoDePlano]
        ),
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}

// Permite usar os dados dentro de cada componente
const useUsuario = () => {
  return useContext(UsuarioContext);
};

export { UsuarioProvider, useUsuario };
