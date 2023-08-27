import React from "react";

export const mainContext = React.createContext(null);

export const useMainContext = () => {
  const context = React.useContext(mainContext);
  if (!context)
    throw new Error("useMainContext can not be used outside it's provider");
  return context;
};
