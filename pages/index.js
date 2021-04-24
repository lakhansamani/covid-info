import Layout from '../components/layout';
import { Search } from '../components/search';
import { Result } from '../components/result';
import { SiteHeading } from '../components/siteHeading';

export default function Home() {
  return (
    <Layout>
      <div className="lg:hidden px-10 text-center">
        <SiteHeading />
      </div>
      <Search />
      <Result />
    </Layout>
  );
}
