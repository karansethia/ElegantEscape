import React, {useContext} from "react";
import {useValidate} from "../hooks/user-hooks";

type AppContext = {
  isLoggedIn: boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const {isError} = useValidate();
  console.log(isError);

  return (
    <AppContext.Provider value={{isLoggedIn: !isError}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
