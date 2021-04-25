import { useRouter } from 'next/router';
import Link from 'next/link';
import get from 'lodash/get';

import Layout from '../../components/layout';
import { data } from '../../utils/data';
import { SiteHeading } from '../../components/siteHeading';
import { ResultItem } from '../../components/resultItem';
import { VIEW } from '../../utils/constants';

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

      <div className="flex justify-around lg:max-w-4xl mt-6 mx-5  sm:w-full text-left border rounded-xl p-10 flex-col relative pb-20">
        <Link href="/">
          <span className="mr-5 mb-10 hover:text-blue-500 cursor-pointer">
            &larr; Back
          </span>
        </Link>

        <ResultItem item={item} view={VIEW.DETAIL} />
      </div>
    </Layout>
  );
}
