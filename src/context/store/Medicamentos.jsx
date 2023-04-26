import { createContext, useContext } from 'react'
// Biblioteca "use-local-storage" permite armazenar e recuperar do localStorage do navegador.
import useLocalStorage from 'use-local-storage'
import uuid from 'short-uuid';

const MedicamentosContext = createContext();

// Função para consumir o contexto de autenticação em outros componentes.
export const useMedicamentos = () => useContext(MedicamentosContext)

export const MedicamentosProvider = ({ children }) => {
    const [medicamentos, setMedicamentos] = useLocalStorage('medicamentos', []);

    // Criando um "id" para cada medicamentos
    const createMedicamento = (medicamento) => {
    setMedicamentos(state => {
        return [...state, { id: uuid().new(), ...medicamento }]
    })
}

return (
        <MedicamentosContext.Provider value={{ medicamentos, createMedicamento }}>
            {children}
        </MedicamentosContext.Provider>
    );
};