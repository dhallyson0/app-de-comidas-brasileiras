import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Fica "escutando" se o usuário logou ou deslogou
    const unsub = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      setCarregando(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, carregando }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}