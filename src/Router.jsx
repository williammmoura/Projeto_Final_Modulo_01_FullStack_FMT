import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Import das Páginas
import PaginaLogin from './Pages/PaginaLogin/PaginaLogin';
import ListaFarmacias from './Pages/ListaFarmacias/ListaFarmacias';
import CadastroFarmacias from './Pages/Cadastro_Farmacias/CadastroFarmacias'
import CadastroMedicamentos from './Pages/Cadastro_Medicamentos/CadastroMedicamentos'
import { ListaMedicamentos } from './Pages/ListaMedicamentos/ListaMedicamentos'

// Import do contexto de autenticação
import { useAuth } from "./context/store/Auth";

// Import do componente "MenuHeader"
import { MenuHeader } from './components/MenuHeader/MenuHeader'



const Router = () => {
    // Obter o ESTADO de autenticação do usuário
    const { isAuthenticated } = useAuth();

    // Define a rota padrão com base no estado de autenticação
    const defaultRoute = !isAuthenticated ? '/login' : '/lista-farmacias'

    return(
        <BrowserRouter>
            <Routes>
                {!isAuthenticated
                    ? (
                        <Route exact path="/login" element={<PaginaLogin />} />
                    )
                    : (
                        <Route exact path="/" element={ <MenuHeader/> }>
                            <Route exact path="/lista-farmacias" element={<ListaFarmacias />} />
                            <Route exact path="/cadastro-farmacias" element={<CadastroFarmacias />} />
                            <Route exact path="/cadastro-medicamentos" element={<CadastroMedicamentos/>} />
                            <Route exact path="/lista-medicamentos" element={<ListaMedicamentos/>}/>
                        </Route>
                    )
                }
                <Route path="*" element={<Navigate to={defaultRoute} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;