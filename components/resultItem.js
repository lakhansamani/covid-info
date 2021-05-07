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
import { CATEGORY_MAP, VIEW } from '../utils/constants';
import useTranslation from 'next-translate/useTranslation';

const getSharableText = (item) => {
  return `
${item.category}\n
Name: ${get(item, 'name')}\n
${get(item, 'contact', '') ? `Phone: ${get(item, 'contact')}` : ''}\n
${get(item, 'address', '') ? `Address: ${get(item, 'address')}` : ''}\n
${get(item, 'google_map', '') ? `Map: ${get(item, 'google_map')}` : ''}\n`;
};

export function ResultItem({ item, view }) {
  const { t } = useTranslation('common');
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
          <h3
            className="text-xl font-bold mb-2 hover:text-blue-500"
            dangerouslySetInnerHTML={{ __html: item.name }}
          />
        </Link>
      )}
      {get(item, 'contact') && (
        <div className="my-3 flex items-center">
          {isDetail ? (
            <b>{t('phone')}:</b>
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
            <span dangerouslySetInnerHTML={{ __html: item.contact }} />
            <span className="text-blue-500">&rarr;{t('call')}</span>
          </a>
        </div>
      )}
      {get(item, 'address') && (
        <div className="my-3 flex items-start">
          {isDetail ? (
            <b>{t('address')}:</b>
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
            <span dangerouslySetInnerHTML={{ __html: item.address }} />
            {get(item, 'google_map') && (
              <span className="text-blue-500">&rarr;{t('go_to_maps')}</span>
            )}
          </a>
        </div>
      )}
      <div className="flex">
        <span className="p-1 rounded mr-1 bg-yellow-500 text-sm text-white">
          # {t(get(CATEGORY_MAP, item.category))}
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
            addToast(t('copied_to_clipboard'), {
              appearance: 'success',
              autoDismiss: true,
            })
          }
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded flex flex-nowrap items-center">
            <FontAwesomeIcon icon={faCopy} className="h-2 mr-2" />
            {t('copy')}
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
              addToast(t('mobile_only_feature'), {
                appearance: 'info',
                autoDismiss: true,
              });
            }
          }}
        >
          <FontAwesomeIcon icon={faShare} className="h-2 mr-2" />
          {t('share')}
        </button>
      </div>
    </>
  );
}
