import React, { createContext, useState, ReactNode, useContext } from 'react';

type AuthContextData = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProviderList({ children }: { children: ReactNode }) {
  const [isLogged, setIsLogged] = useState(false);

  function login() {
    setIsLogged(true);
  }

  function logout() {
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);
