import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface NavigationBarContextData {
  isHomeSelected: boolean;
  isAwardSelected: boolean;
  handleHomeSelect: () => void;
  handleAwardSelect: () => void;
}

interface NavigationBarProviderProps {
  children: ReactNode;
}

export const NavigationBarContext = createContext({} as NavigationBarContextData);


export function NavigationBarProvider({ children }: NavigationBarProviderProps) {

  const [isHomeSelected, setIsHomeSelected] = useState(false);
  const [isAwardSelected, setIsAwardSelected] = useState(false);

  const handleHomeSelect = () => {
    setIsAwardSelected(false);
    setIsHomeSelected(true);
  }

  const handleAwardSelect = () => {
    setIsHomeSelected(false);
    setIsAwardSelected(true);
  }

  useEffect(() => {
    handleHomeSelect()
  }, [])

  return (
    <NavigationBarContext.Provider value={{
      isHomeSelected,
      isAwardSelected,
      handleHomeSelect,
      handleAwardSelect,
    }}>
      {children}
    </NavigationBarContext.Provider>
  )
}