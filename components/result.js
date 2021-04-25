import { useContext, useRef } from 'react';
import { useRouter } from 'next/router';

import Fuse from 'fuse.js';

import { data } from '../utils/data';
import { FilterContext } from '../context/filter';
import { filter, hasFilter } from '../utils/filterData';
import { ResultItem } from './resultItem';
import { VIEW } from '../utils/constants';

export const Result = () => {
  const fuseInstance = useRef();
  const router = useRouter();
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
          className="p-6 m-3 text-left border w-96 rounded-xl cursor-pointer relative pb-20 hover:shadow-md"
          key={item.id}
        >
          <ResultItem item={item} view={VIEW.RESULT} />
        </div>
      ))}
    </div>
  );
};
