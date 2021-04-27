import Layout from '../components/layout';
import { Search } from '../components/search';
import { Result } from '../components/result';

export default function Home() {
  return (
    <Layout>
      <Search />
      <div className="mt-44 lg:mt-20">
        <Result />
      </div>
    </Layout>
  );
}
