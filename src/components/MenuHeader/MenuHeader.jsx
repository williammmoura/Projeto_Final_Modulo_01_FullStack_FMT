import React from "react";
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from "../../context/store/Auth";
import './MenuHeader.css';
import { Footer } from "../Footer/Footer";
import {Nav, Figure} from 'react-bootstrap'
import Logo from '../../assets/LogoNav_PCS.png';

export const MenuHeader = () => {
  const { email, handleLogout } = useAuth();
  return (
    <div className="pagina">
      <Nav className="navbar navbar-light menu"> 
        
        <Figure.Image
            width={135}
            alt="Logo"
            src={Logo}
        />

        <Link to="/lista-farmacias">
          Lista de farmácias
        </Link>

        <Link to="/cadastro-farmacias">
          Cadastro Farmacias
        </Link>

        <Link to="/cadastro-medicamentos">
          Cadastro Medicamentos
        </Link>

        <Link to="/lista-medicamentos">
          Informações dos Medicamentos
        </Link>

        <button onClick={handleLogout}>
          Sair
        </button>
      </Nav>
      
      <div className="conteudo pb-4">
        <Outlet />
      </div>
      
      <Footer />
    </div>
  )
}
