import React, { Fragment, useContext } from 'react';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uniq from 'lodash/uniq';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import { FilterContext } from '../context/filter';
import { SideMenuContext } from '../context/sideMenu';
import { data } from '../utils/data';
import { hasFilter } from '../utils/filterData';

const cities = uniq(data.map((i) => i.city));

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

  const handleCityChange = (city) => {
    setFilters({
      ...filters,
      city,
    });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      city: '',
      services: [],
      beds: '',
    });
  };

  return (
    <div className="fixed right-0 left-0 top-0  justify-center items-center sm:w-full bg-white shadow-md z-40">
      <div className="px-5 py-5 flex flex-nowrap lg:flex-row lg:px-10 lg:ml-80 flex-col ">
        <div className="flex flex-nowrap flex-1">
          <input
            type="text"
            placeholder="Search name, address, phone number"
            className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded w-full"
            value={currentSelectedFilters}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-nowrap lg:ml-5 items-center lg:w-3/12 mt-3 lg:mt-0 lg:flex-1">
          <Listbox value={filters.city} onChange={handleCityChange}>
            {({ open }) => (
              <>
                <div className="relative flex-1">
                  <Listbox.Button className="relative w-full py:2 pl-3 pr-10 text-left focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded sm:text-md ">
                    {filters.city ? (
                      <span className="block">{filters.city}</span>
                    ) : (
                      <span className="block text-gray-400">Select a city</span>
                    )}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      {cities.map((city) => (
                        <Listbox.Option
                          key={city}
                          className={({ active }) =>
                            `${
                              active
                                ? 'text-amber-900 bg-amber-100 bg-gray-200'
                                : 'text-gray-900'
                            }
                          select-none relative py-2 pl-10 pr-4 hover:bg-gray-200 cursor-pointer`
                          }
                          value={city}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                              >
                                {city}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? 'text-amber-600' : 'text-amber-600'
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <button
            onClick={() => {
              setIsSideMenuVisible(true);
            }}
            className="ml-5 lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-nowrap items-center"
          >
            <FontAwesomeIcon icon={faFilter} className="h-3 mr-2" />
            Filters
          </button>
          <button
            onClick={() => {
              clearFilters();
            }}
            disabled={!hasFilter(filters)}
            className="disabled:opacity-50 ml-5 bg-red-500 hover:bg-red-700 focus:outline-none text-white font-bold py-2 px-4 rounded flex flex-nowrap items-center"
          >
            <FontAwesomeIcon icon={faTimes} className="h-3 mr-2" />
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
