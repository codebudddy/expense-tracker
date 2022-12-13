import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth';

const AuthUserContext = createContext({
  authUser: null,
  isLoading: false,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  function authStateChanged(user) {
    setIsLoading(true);

    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      name: user.name,
    });
    setIsLoading(false);
  }

  const signOut = () =>
    authSignOut(auth).then(() => {
      clear();
    });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, authStateChanged);
    return () => unsub();
  }, []);

  return { authUser, isLoading, signOut };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
