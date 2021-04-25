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
    <div className="fixed right-0 left-0 top-0  justify-center items-center sm:w-full bg-white shadow-md z-40">
      <div className="lg:ml-80 px-5 lg:px-10 py-5">
        <div className="flex flex-nowrap">
          <input
            type="text"
            placeholder="Search name, address, phone number"
            className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 ring rounded w-full"
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
        <div className="lg:hidden my-3 flex text-sm">
          <b>Select City: </b>
          <MultiList
            layout="horizontal"
            listData={uniq(data.map((i) => i.city))}
            label=""
            filterKey="cities"
          />
        </div>
      </div>
    </div>
  );
};
