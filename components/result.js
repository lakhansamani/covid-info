import { useContext, useRef } from 'react';
import Link from 'next/link';
import get from 'lodash/get';
import { faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fuse from 'fuse.js';

import { data } from '../utils/data';
import { FilterContext } from '../context/filter';
import { filter, hasFilter } from '../utils/filterData';

export const Result = () => {
  const fuseInstance = useRef();
  const { filters } = useContext(FilterContext);
  fuseInstance.current = new Fuse(data, {
    keys: ['name', 'contact', 'address', 'city', 'category'],
  });

  const filteredData = filter(data, filters, fuseInstance.current);

  if (hasFilter(filters) && !filteredData.length) {
    return (
      <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
        <h2>No Data Found</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full mb-10 overscroll-auto">
      {filteredData.map((item) => (
        <div
          className="p-6 m-3 text-left border w-96 rounded-xl cursor-pointer"
          key={item.id}
        >
          <Link href={`/org/${item.id}`} className="">
            <h3 className="text-xl font-bold mb-2 hover:text-blue-500">
              {item.name} &rarr;
            </h3>
          </Link>
          {get(item, 'contact') && (
            <div className="my-3 flex items-center">
              <FontAwesomeIcon
                className="font-bold mr-2 h-4"
                icon={faMobileAlt}
              />
              <a
                href={`tel:${item.contact}`}
                className="text-gray-600 hover:text-blue-500"
              >
                {item.contact}
                <span className="text-blue-500">&rarr;Call</span>
              </a>
            </div>
          )}
          {get(item, 'address') && (
            <div className="my-3 flex items-start">
              <FontAwesomeIcon
                className="font-bold mr-2 h-4 mt-1"
                icon={faMapMarkerAlt}
              />
              <a
                className="flex-1 text-gray-600 hover:text-blue-500"
                href={get(item, 'google_map', '/')}
                target="_blank"
              >
                {item.address}{' '}
                <span className="text-blue-500">&rarr;Go to maps</span>
              </a>
            </div>
          )}
          <div className="flex ml-5">
            <span className="p-1 rounded mr-1 bg-yellow-500 text-sm text-white">
              # {item.category}
            </span>
            {item.is_available ? (
              <span className="p-1 rounded mr-1 bg-green-500 text-sm text-white">
                # Available
              </span>
            ) : (
              <span className="p-1 rounded mr-1 bg-red-500 text-sm text-white">
                # Not Available
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
