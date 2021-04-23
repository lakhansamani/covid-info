import Link from 'next/link';
import { useRouter } from 'next/router';
import { data } from '../utils/data';

export const Result = () => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
      {data.map((item) => (
        <div
          className="p-6 m-3 text-left border w-96 rounded-xl cursor-pointer"
          onClick={() => {
            router.push(`/org/${item.id}`);
          }}
        >
          <Link
            key={item.id}
            href={`/org/${item.id}`}
            className="hover:text-blue-600 focus:text-blue-600 cursor-pointer"
          >
            <h3 className="text-xl font-bold">{item.name} &rarr;</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
