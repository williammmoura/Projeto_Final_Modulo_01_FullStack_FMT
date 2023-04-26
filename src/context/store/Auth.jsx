import { createContext, useContext } from 'react'
// Biblioteca "use-local-storage" permite armazenar e recuperar do localStorage do navegador.
import useLocalStorage from 'use-local-storage'

const AuthContext = createContext();

// Função para consumir o contexto de autenticação em outros componentes.
export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useLocalStorage('email', '');

  // Função de login
  const handleLogin = (data) => {
    setEmail(data.email)
  };

  // Função de logout
  const handleLogout = () => {
    setEmail('')
  }

  // Verificando se o campo de email está preenchido
  const isAuthenticated = !!email;


  return (
    <AuthContext.Provider value={{ email, handleLogin, isAuthenticated, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
