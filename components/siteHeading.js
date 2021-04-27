import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export const SiteHeading = () => {
  const { t } = useTranslation('common');
  return (
    <>
      {/* <span className="beta p-1 rounded mr-1 bg-red-500 text-sm text-white">
        Beta
      </span> */}
      <Link href="/">
        <h2 className="text-xl font-bold">{t('title')}</h2>
      </Link>
      <h2 className="text-l font-semibold">{t('information_center')}</h2>

      <p className="mt-3 text-l text-gray-800">{t('description')}</p>
    </>
  );
};
