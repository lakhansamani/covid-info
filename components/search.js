import React, { useContext } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uniq from 'lodash/uniq';

import { FilterContext } from '../context/filter';
import { SideMenuContext } from '../context/sideMenu';
import { MultiList } from './multiList';
import { data } from '../utils/data';

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
    <div>
      <div className="flex flex-nowrap justify-center items-center lg:max-w-4xl md:max-w-2xl mt-6 sm:w-screen">
        <input
          type="text"
          placeholder="Search name, address, phone number"
          className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-400 rounded w-full"
          value={currentSelectedFilters}
          onChange={handleChange}
        />

        <button
          onClick={() => {
            setIsSideMenuVisible(true);
          }}
          className="ml-5 lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-nowrap items-center"
        >
          <FontAwesomeIcon icon={faFilter} className="h-3 mr-2" />
          Filter
        </button>
      </div>
      <div className="lg:hidden mt-3">
        <MultiList
          layout="horizontal"
          listData={uniq(data.map((i) => i.city))}
          label=""
          filterKey="cities"
        />
      </div>
    </div>
  );
};
