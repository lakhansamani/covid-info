import get from 'lodash/get';
import Link from 'next/link';

import { faMobileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VIEW } from '../utils/constants';

export function ResultItem({ item, view }) {
  console.log({ item });
  return (
    <>
      {view === VIEW.DETAIL ? (
        <h3 className="text-xl font-bold mb-2 hover:text-blue-500">
          {item.name}
        </h3>
      ) : (
        <Link href={`/org/${item.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-500">
            {item.name} &rarr;
          </h3>
        </Link>
      )}
      {get(item, 'contact') && (
        <div className="my-3 flex items-center">
          {view === VIEW.DETAIL ? (
            <b>Phone:</b>
          ) : (
            <FontAwesomeIcon
              className="font-bold mr-2 h-4"
              icon={faMobileAlt}
            />
          )}
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
          {view === VIEW.DETAIL ? (
            <b>Address:</b>
          ) : (
            <FontAwesomeIcon
              className="font-bold mr-2 h-4"
              icon={faMapMarkerAlt}
            />
          )}
          <a
            className="flex-1 text-gray-600 hover:text-blue-500"
            href={get(item, 'google_map', '/')}
            target="_blank"
          >
            {item.address}{' '}
            {get(item, 'google_map') && (
              <span className="text-blue-500">&rarr;Go to maps</span>
            )}
          </a>
        </div>
      )}
      <div className="flex">
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
    </>
  );
}
