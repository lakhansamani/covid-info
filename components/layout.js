import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

import { Filters } from './filters';

export default function Layout({ children }) {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Filters />
        <div className="flex flex-col items-center  min-h-screen relative lg:ml-80 w-full sm:w-screen">
          {children}
          <div className="mb-40" />

          <footer className="fixed bottom-0 bg-gray-200  items-center justify-center text-center w-full">
            <p className="text-gray-800 p-3 text-xs">
              {t('footer_1')}
              <br />
              {t('footer_2')}{' '}
              <a
                href="mailto:covidinfocenterin@gmail.com"
                className="text-blue-600"
              >
                covidinfocenterin@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
