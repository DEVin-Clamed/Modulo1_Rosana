import { Outlet, Navigate } from "react-router-dom";

export const RotaPrivada = ({ tipoDePlano }) => {
  return tipoDePlano === "premium" ? <Outlet /> : <Navigate to="/" />;
};
