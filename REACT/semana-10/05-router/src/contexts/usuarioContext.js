import { createContext, useContext, useCallback, useState } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [tipoDePlano, setTipoDePlano] = useState("free");
  
  // vou deixar esse console apenas para nos ajudar a entender o que está acontecendo
  console.log({ tipoDePlano });

  return (
    <UsuarioContext.Provider
      value={{
        nome: "Rosana Rezende",

        tipoDePlano,

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
};

// Permite usar os dados dentro de cada componente
const useUsuario = () => {
  return useContext(UsuarioContext);
};

export { UsuarioProvider, useUsuario };
