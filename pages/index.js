import Layout from '../components/layout';
import { Search } from '../components/search';
import { Result } from '../components/result';
import { SiteHeading } from '../components/siteHeading';

export default function Home() {
  return (
    <Layout>
      <Search />
      <div className="mt-28 lg:mt-20">
        <Result />
      </div>
    </Layout>
  );
}
