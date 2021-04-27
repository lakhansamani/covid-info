import { useContext } from 'react';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import get from 'lodash/get';

import { MultiList } from './multiList';
import uniq from 'lodash/uniq';
import { SideMenuContext } from '../context/sideMenu';
import { SiteHeading } from './siteHeading';
import { DataContext } from '../context/data';
import useTranslation from 'next-translate/useTranslation';
import { CATEGORY_MAP } from '../utils/constants';

export function Filters() {
  const { t } = useTranslation('common');
  const { data } = useContext(DataContext);
  const { isSideMenuVisible, setIsSideMenuVisible } = useContext(
    SideMenuContext
  );
  if (!isSideMenuVisible) {
    return null;
  }

  return (
    <div className="fixed lg:w-80 bg-gray-200 px-10 py-5 h-screen z-50 isolate sm:w-screen">
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

      <div className="my-5 border-solid border border-gray-600" />
      <MultiList
        listData={uniq(data.map((i) => i.category)).map((i) =>
          t(get(CATEGORY_MAP, i))
        )}
        label={t('filter_services')}
        filterKey="services"
      />
      <br />
      {/* <SingleList listData={['Yes', 'No']} label="Has Beds" filterKey="beds" /> */}
      <br />
      <button
        onClick={() => {
          setIsSideMenuVisible(false);
        }}
        className="lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-nowrap items-center"
      >
        <FontAwesomeIcon icon={faCheck} className="h-3 mr-2" />
        {t('apply_filter')}
      </button>
    </div>
  );
}
