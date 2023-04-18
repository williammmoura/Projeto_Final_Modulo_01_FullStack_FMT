import { createContext, useContext } from 'react'
import useLocalStorage from 'use-local-storage'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useLocalStorage('email', '');

  const handleLogin = (data) => {
    setEmail(data.email)
  };

  const handleLogout = () => {
    setEmail('')
  }

  const isAuthenticated = !!email;

  console.log('>>>> email', email)
  console.log('>>>> isAuthenticated', isAuthenticated)

  return (
    <AuthContext.Provider value={{ email, handleLogin, isAuthenticated, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
