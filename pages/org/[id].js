import { useRouter } from 'next/router';
import Link from 'next/link';
import get from 'lodash/get';
import {
  faMobileAlt,
  faMapMarkerAlt,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../../components/layout';
import { data } from '../../utils/data';
import { SiteHeading } from '../../components/siteHeading';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const item = data.find((i) => i.id === id);

  if (!item) {
    return <h1> 404 Not found</h1>;
  }

  return (
    <Layout>
      <div className="lg:hidden px-10 text-center">
        <SiteHeading />
      </div>

      <div className="flex justify-around lg:max-w-4xl mt-6 mx-5  sm:w-full text-left border rounded-xl p-10 flex-col">
        <Link href="/">
          <span className="mr-5 hover:text-blue-500 cursor-pointer">
            &larr; Back
          </span>
        </Link>
        <h3 className="text-xl font-bold my-5">{item.name}</h3>

        <div>
          {get(item, 'contact') && (
            <div className="my-1 flex items-center">
              <b>Phone: </b>
              <a
                href={`tel:${item.contact}`}
                className="text-gray-600 hover:text-blue-500 ml-2"
              >
                {item.contact}
              </a>
            </div>
          )}
          {get(item, 'address') && (
            <div className="my-1 flex items-start">
              <b>Address: </b>
              <a
                className="flex-1 text-gray-600 hover:text-blue-500 ml-2"
                href={get(item, 'google_map', '/')}
                target="_blank"
              >
                {item.address}
              </a>
            </div>
          )}
          {get(item, 'description') && (
            <div className="my-1 flex items-start">
              <b>Information: </b>
              <p className="flex-1 text-gray-600 ml-2">{item.description}</p>
            </div>
          )}
          <div className="flex">
            <span className="p-1 rounded mr-1 bg-yellow-500 text-sm text-white">
              # {item.category}
            </span>
            {item.is_available ? (
              <span className="p-1 rounded mr-1 bg-green-500 text-sm text-white">
                # Available
              </span>
            ) : (
              <span className="p-1 rounded mr-1 bg-red-500 text-sm text-white">
                # Not Available
              </span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
