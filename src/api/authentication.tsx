import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "./auth";

let userState: string;

interface IUserCTX {
  user: string | null;
  loading: boolean;
}

const User = createContext<IUserCTX>({ user: null, loading: false });

export const UserProvider = ({ value, children }: { value: IUserCTX; children: React.ReactNode }) => {
  const { user } = value;

  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = useState({
    user: userState || null,
    loading: userState === undefined,
  });

  useEffect(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;
    const resolveUser = async () => {
      const user = await getUserFromLocalCookie();
      if (isMounted) {
        setUser({ user, loading: false });
      }
    };
    resolveUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return data;
};
