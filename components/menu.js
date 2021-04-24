import Link from 'next/link';
import { useContext } from 'react';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MultiList } from './multiList';
import { SingleList } from './singleList';
import { data } from '../utils/data';
import uniq from 'lodash/uniq';
import { SideMenuContext } from '../context/sideMenu';
import { SiteHeading } from './siteHeading';

export function SideMenu() {
  const { isSideMenuVisible, setIsSideMenuVisible } = useContext(
    SideMenuContext
  );
  if (!isSideMenuVisible) {
    return null;
  }

  return (
    <div className="fixed lg:w-80 bg-gray-200 p-10 h-screen z-50 isolate sm:w-screen">
      <div className="lg:hidden flex justify-end mb-8">
        <FontAwesomeIcon
          icon={faTimes}
          className="h-5 cursor-pointer"
          onClick={() => {
            setIsSideMenuVisible(false);
          }}
        />
      </div>

      <SiteHeading />

      <div className="my-5 border-solid border border-gray-700" />
      <MultiList
        listData={uniq(data.map((i) => i.city))}
        label="Filter Cities"
        filterKey="cities"
      />
      <p className="italic text-sm">More cities, coming soon!</p>
      <br />
      <MultiList
        listData={uniq(data.map((i) => i.category))}
        label="Filter Services"
        filterKey="services"
      />
      <p className="italic text-sm">More services, coming soon!</p>
      <br />
      <SingleList listData={['Yes', 'No']} label="Has Beds" filterKey="beds" />
      <br />
      <button
        onClick={() => {
          setIsSideMenuVisible(false);
        }}
        className="lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-nowrap items-center"
      >
        <FontAwesomeIcon icon={faCheck} className="h-3 mr-2" />
        Apply Filters
      </button>
    </div>
  );
}
