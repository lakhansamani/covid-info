import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>COVID-19 Information Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 p-10 text-center">
        <h1 className="text-5xl font-bold text-blue-600 cursor-pointer">
          COVID-19 Information Center
        </h1>

        <p className="mt-3 text-l text-gray-800">
          Get information about COVID-19 hospitals, beds, oxygen, medicine,
          doctors and other services
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/"
            className="p-6 m-3 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Vadodara &rarr;</h3>
            <p className="mt-4 text-xl">Coming Soon!</p>
          </a>

          <a
            href="/"
            className="p-6 m-3 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Other Cities</h3>
            <p className="mt-4 text-xl">Coming soon!</p>
          </a>
        </div>
      </main>
      <footer>
        <p className="text-gray-800 p-6">
          We are actively gathering information about COVID-19 hospitals and
          services. Please contribute by sending any COVID-19 related
          information to{' '}
          <a href="mailto:lakhan.m.samani@gmail.com" className="text-blue-600">
            lakhan.m.samani@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
