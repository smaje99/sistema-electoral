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

    const contextValue = {
        user,
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