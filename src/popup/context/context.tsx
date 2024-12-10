/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import { IPopupContext, IPopupContextType } from "./context.type";

const initialState = {
  isLoggedIn: false,
};

export const PopupContext = React.createContext<IPopupContextType>({
  state: initialState,
  updateLoggedIn: (_e: boolean) => null,
});

const PopupContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<IPopupContext>(initialState);

  const updateLoggedIn = (value: boolean) => {
    setState((prev) => ({
      ...prev,
      isLoggedIn: value,
    }));
  };

  return (
    <PopupContext.Provider value={{ state, updateLoggedIn }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
