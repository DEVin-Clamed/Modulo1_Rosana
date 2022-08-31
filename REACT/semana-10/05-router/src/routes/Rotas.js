import { Routes, Route, Navigate } from "react-router-dom";

import { Home, Pago, Gratuito, NaoEncontrado, Usuario } from "./../pages";
import { RotaPrivada } from "./RotaPrivada";

import { useUsuario } from "./../contexts/usuarioContext";
import { MusicasProvider } from "./../contexts/musicasContext";

export const Rotas = () => {
  const { tipoDePlano } = useUsuario();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* redirecionar */}
        <Route path="/home" element={<Navigate replace to="/" />} />

        <Route path="/gratuito" element={<Gratuito />} />

        {/* Rota privada */}
        <Route
          exact
          path="/pago"
          element={<RotaPrivada tipoDePlano={tipoDePlano} />}
        >
          <Route
            exact
            path="/pago"
            element={
              <MusicasProvider>
                <Pago />
              </MusicasProvider>
            }
          />
        </Route>

        {/* Parâmetros */}
        <Route path="/pago/:userName" element={<Usuario />} />

        {/* Não encontrado */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </>
  );
}
