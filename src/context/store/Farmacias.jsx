import { createContext, useContext } from 'react'
// Biblioteca "use-local-storage" permite armazenar e recuperar do localStorage do navegador.
import useLocalStorage from 'use-local-storage'
import uuid from 'short-uuid';

const FarmaciasContext = createContext();

// Função para consumir o contexto de autenticação em outros componentes.
export const useFarmacias = () => useContext(FarmaciasContext)

export const FarmaciasProvider = ({ children }) => {
  const [farmacias, setFarmacias] = useLocalStorage('farmacias', []);

  // Criando um "id" para cada farmacia
  const createFarmacia = (farmacia) => {
    setFarmacias(state => {
      return [...state, { id: uuid().new(), ...farmacia }]
    })
  }

  return (
    <FarmaciasContext.Provider value={{ farmacias, createFarmacia }}>
      {children}
    </FarmaciasContext.Provider>
  );
};