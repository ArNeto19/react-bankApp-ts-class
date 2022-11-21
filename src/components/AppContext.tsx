import { createContext } from "react";

interface IAppContext {
  user: string;
  isLogged: boolean
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({children}: any) => {
  const [user, isLogged] = ['', false];

  return <AppContext.Provider value={{ user, isLogged }}>{children}</AppContext.Provider>;
};
