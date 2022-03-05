import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {
        setUser(userCredentials);
        fromLocation && navigate(fromLocation);
    }

    const logout = () => setUser(null);

    const isLogged = () => !!user;

    const hasPermission = ({ menu, action }) => {
        const menuAux = user
            ?.permissions
            .find(permission => permission.menu === menu);
        const actionAux = menuAux
            ?.actions
            .find(data => data.action === action);
        return !!(actionAux?.isActive);
    }

    const contextValue = {
        user,
        hasPermission,
        isLogged,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}