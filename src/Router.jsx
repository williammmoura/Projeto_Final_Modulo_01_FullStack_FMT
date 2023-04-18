import React from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PaginaLogin from './Pages/PaginaLogin/PaginaLogin';
import ListaMedicamentos from './Pages/ListaMedicamentos/ListaMedicamentos';
import Teste from './Pages/Teste/Teste';
import { useAuth } from "./store/Auth";
import { Menu } from './layout/Menu/Menu';

const Router = () => {
    const { isAuthenticated } = useAuth();

    const defaultRoute = !isAuthenticated ? '/' : '/lista-medicamentos'

    return(
        <BrowserRouter>
            <Routes>
                {!isAuthenticated
                    ? (
                        <Route exact path="/" element={<PaginaLogin />} />
                    )
                    : (
                        <Route path="/" element={ <Menu /> }>
                            <Route exact path="/lista-medicamentos" element={<ListaMedicamentos />} />
                            <Route exact path="/teste" element={<Teste />} />
                        </Route>
                    )
                }
                <Route path="*" element={<Navigate to={defaultRoute} replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;