import React, { useContext } from 'react';
import { FilterContext } from '../context/filter';

export const Search = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const currentSelectedFilters = filters.search;

  const handleChange = (e) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  return (
    <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
      <input
        type="text"
        placeholder="Search name, address, phone number"
        className="focus:outline-none focus:ring focus:border-blue-300 p-3 border border-gray-400 rounded w-full"
        value={currentSelectedFilters}
        onChange={handleChange}
      />
    </div>
  );
};
