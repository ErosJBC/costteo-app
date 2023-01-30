import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const defaultValue = {
    login: () => {},
    logout: () => {},
    isAuthenticated: false
}

const TOKEN = 'token';

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = useCallback(() => {
        localStorage.setItem(TOKEN, JSON.stringify(true));
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN);
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }), [login, logout, isAuthenticated]);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN);
        if (token !== null) setIsAuthenticated(JSON.parse(token));
        else setIsAuthenticated(false);
    }, []);

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}