import { createContext, useState } from 'react';

export const FilterContext = createContext({
  filters: {
    search: '',
    city: '',
    services: [],
    beds: '',
  },
  setFilters: () => {},
});

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    search: '',
    city: '',
    services: [],
    beds: '',
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
