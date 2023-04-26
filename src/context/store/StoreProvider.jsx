import { AuthProvider } from './Auth'
import { FarmaciasProvider } from './Farmacias';
import { MedicamentosProvider } from './Medicamentos';

//Componente "StoreProvider" responsável por fornecer a lógica de autenticação para os componentes filhos.
export const StoreProvider = ({ children }) => (
    <AuthProvider>
        <FarmaciasProvider>
            <MedicamentosProvider>
                {children}
            </MedicamentosProvider>
        </FarmaciasProvider>    
    </AuthProvider>
);
