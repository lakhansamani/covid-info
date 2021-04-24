import React, { useContext } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FilterContext } from '../context/filter';
import { SideMenuContext } from '../context/sideMenu';

export const Search = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const { setIsSideMenuVisible } = useContext(SideMenuContext);
  const currentSelectedFilters = filters.search;

  const handleChange = (e) => {
    setFilters({
      ...filters,
      search: (e.target.value || '').trim(),
    });
  };

  return (
    <div className="flex flex-nowrap justify-center items-center lg:max-w-4xl md:max-w-2xl mt-6 sm:w-screen">
      <input
        type="text"
        placeholder="Search name, address, phone number"
        className="focus:outline-none focus:ring focus:border-blue-300 p-3 border border-gray-400 rounded w-full"
        value={currentSelectedFilters}
        onChange={handleChange}
      />

      <div className="ml-5 lg:hidden">
        <FontAwesomeIcon
          icon={faFilter}
          className="h-5"
          onClick={() => {
            setIsSideMenuVisible(true);
          }}
        />
      </div>
    </div>
  );
};
