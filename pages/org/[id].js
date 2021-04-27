import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../../components/layout';
import { SiteHeading } from '../../components/siteHeading';
import { ResultItem } from '../../components/resultItem';
import { VIEW } from '../../utils/constants';
import { DataContext } from '../../context/data';
import useTranslation from 'next-translate/useTranslation';

export default function Details() {
  const { data } = useContext(DataContext);
  const router = useRouter();
  const { t } = useTranslation('common');

  const { id } = router.query;
  const item = data.find((i) => i.id.toString() === id.toString());

  if (!item) {
    return (
      <Layout>
        <div class="flex justify-center items-center h-screen text-2xl font-bold">
          {' '}
          {t('not_found')}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="lg:hidden px-10 text-center">
        <SiteHeading />
      </div>

      <div className="flex justify-around lg:max-w-4xl mt-6 mx-5  sm:w-full text-left border rounded-xl p-10 flex-col relative pb-20">
        <Link href="/">
          <span className="mr-5 mb-10 hover:text-blue-500 cursor-pointer">
            &larr; {t('back')}
          </span>
        </Link>

        <ResultItem item={item} view={VIEW.DETAIL} />
      </div>
    </Layout>
  );
}
