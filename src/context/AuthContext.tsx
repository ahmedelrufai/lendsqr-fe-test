import { createContext, useContext, useState } from "react";
import { User } from "../types";

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: async (email: string, password: string) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const isLoggedIn = !!user;

  const login = async (email: string, password: string) => {
    // call authService.login and update user state accordingly
  };

  const logout = () => {
    // call authService.logout and update user state accordingly
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
