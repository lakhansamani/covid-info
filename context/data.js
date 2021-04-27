import { createContext } from 'react';
import data from '../data/data.json';

export const DataContext = createContext({
  data: [],
});

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
