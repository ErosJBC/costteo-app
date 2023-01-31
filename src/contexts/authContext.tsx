import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const defaultValue = {
    login: () => {},
    logout: () => {},
    loadingProgressBar: () => {},
    noLoadingProgressBar: () => {},
    onBackdrop: () => {},
    offBackdrop: () => {},
    backdrop: false,
    loading: false,
    isAuthenticated: false
}

const TOKEN = 'token';

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const login = useCallback(() => {
        localStorage.setItem(TOKEN, JSON.stringify(true));
        setIsAuthenticated(true);
    }, []);

    const loadingProgressBar = useCallback(() => {
        setLoading(true);
    }, []);

    const noLoadingProgressBar = useCallback(() => {
        setLoading(false);
    }, []);

    const onBackdrop = useCallback(() => {
        setBackdrop(true);
    }, []);

    const offBackdrop = useCallback(() => {
        setBackdrop(false);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN);
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        loadingProgressBar,
        noLoadingProgressBar,
        onBackdrop,
        offBackdrop,
        backdrop,
        loading,
        isAuthenticated
    }), [login, logout, loadingProgressBar, noLoadingProgressBar, onBackdrop, offBackdrop, backdrop, loading, isAuthenticated]);

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