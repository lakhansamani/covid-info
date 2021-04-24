import Head from 'next/head';

import { SideMenu } from './menu';
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>COVID-19 Information Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <SideMenu />
        <div className="flex flex-col items-center  h-screen py-5 relative lg:ml-80 w-full sm:w-screen">
          {children}
          <footer className="fixed bottom-0 bg-gray-200  items-center justify-center text-center w-full">
            <p className="text-gray-800 p-3 text-xs">
              We are actively gathering information about COVID-19 hospitals and
              services.
              <br />
              Please contribute by sending any COVID-19 related information to{' '}
              <a
                href="mailto:lakhan.m.samani@gmail.com"
                className="text-blue-600"
              >
                lakhan.m.samani@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
