import get from 'lodash/get';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  faMobileAlt,
  faMapMarkerAlt,
  faCopy,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToasts } from 'react-toast-notifications';
import { VIEW } from '../utils/constants';

const getSharableText = (item) => {
  return `
${item.category}\n
Name: ${get(item, 'name')}\n
Phone: ${item.phone}\n
${get(item, 'address', '') ? `Address: ${get(item, 'address')}` : ''}\n
${get(item, 'google_map', '') ? `Map: ${get(item, 'google_map')}` : ''}\n`;
};

export function ResultItem({ item, view }) {
  const isDetail = view === VIEW.DETAIL;
  const { addToast } = useToasts();
  return (
    <>
      {isDetail ? (
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
          {isDetail ? (
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
          {isDetail ? (
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
        <span className="p-1 rounded mr-1 bg-yellow-300 text-sm text-white">
          # {item.category}
        </span>
      </div>

      <div
        className={`absolute bottom-0 p-3 flex border-t border-gray-200 w-full left-0 ${
          isDetail ? `pl-10` : `pl-5`
        }`}
      >
        <CopyToClipboard
          text={getSharableText(item)}
          onCopy={() =>
            addToast(`Copied to Clipboard`, {
              appearance: 'success',
              autoDismiss: true,
            })
          }
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded flex flex-nowrap items-center">
            <FontAwesomeIcon icon={faCopy} className="h-2 mr-2" />
            Copy
          </button>
        </CopyToClipboard>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white text-xs ml-3 py-2 px-4 rounded flex flex-nowrap items-center"
          onClick={() => {
            if (navigator && navigator.share) {
              navigator.share({
                url: `https://covid-info-center.in/${item.id}`,
                title: get(item, 'name'),
                text: getSharableText(item),
              });
            } else {
              addToast(`This feature is only supported on mobile browsers`, {
                appearance: 'info',
                autoDismiss: true,
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faShare} className="h-2 mr-2" />
          Share
        </button>
      </div>
    </>
  );
}
