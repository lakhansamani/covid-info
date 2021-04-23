import Head from 'next/head';

import { SideMenu } from './menu';
export default function Layout({ children }) {
  return (
    <div className="h-full w-full">
      <Head>
        <title>COVID-19 Information Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="lg:w-1/5 bg-gray-200 p-10">
          <SideMenu />
        </div>
        <div className="flex flex-col items-center  min-h-screen py-5 relative lg:w-4/5">
          {children}
          <footer className="fixed bottom-0 bg-white flex  items-center justify-center text-center">
            <p className="text-gray-800 p-6">
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
