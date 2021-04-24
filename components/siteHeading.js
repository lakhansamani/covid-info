import Link from 'next/link';

export const SiteHeading = () => {
  return (
    <>
      <Link href="/">
        <h2 className="text-xl font-bold">COVID-19 </h2>
      </Link>
      <h2 className="text-l font-semibold">Information Center</h2>
      <p className="mt-3 text-l text-gray-800">
        Get information about COVID-19 hospitals, beds, oxygen, medicine,
        doctors and other services
      </p>
    </>
  );
};
