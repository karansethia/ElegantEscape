import React, {useContext} from "react";
import {useValidate} from "../hooks/user-hooks";

type AppContext = {
  isLoggedIn: boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const {isSuccess} = useValidate();
  console.log(isSuccess);

  return (
    <AppContext.Provider value={{isLoggedIn: isSuccess}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
