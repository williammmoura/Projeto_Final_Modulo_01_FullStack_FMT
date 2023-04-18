import { AuthProvider } from './Auth'

export const StoreProvider = ({ children }) => {
    <AuthProvider>
        {children}
    </AuthProvider>
};
