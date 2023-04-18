import React from "react";
import { Outlet, Link } from 'react-router-dom'
import { useAuth } from "../../store/Auth";

export const Menu = () => {
  const { email, handleLogout } = useAuth();
  return (
    <>
      <h2>olá, {email}</h2>

      <br />

      <Link to="/lista-medicamentos">
        Lista de medicamentos
      </Link>
      {' | '}
      <Link to="/teste">
        Teste
      </Link>

      <br />

      <button onClick={handleLogout}>
        Sair
      </button>

      <Outlet />
    </>
  )
}
