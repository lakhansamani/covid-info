import { createContext, useState, useEffect } from 'react';
import useWindowSize from '../utils/useWindowSize';

export const SideMenuContext = createContext({
  isSideMenuVisible: true,
  setIsSideMenuVisible: () => {},
});

export function SideMenuProvider({ children }) {
  const [width] = useWindowSize();
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(width > 768);
  useEffect(() => {
    setIsSideMenuVisible(width > 768);
  }, [width]);

  return (
    <SideMenuContext.Provider
      value={{ isSideMenuVisible, setIsSideMenuVisible }}
    >
      {children}
    </SideMenuContext.Provider>
  );
}
