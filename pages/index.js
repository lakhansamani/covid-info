import Layout from '../components/layout';
import { Search } from '../components/search';
import { Result } from '../components/result';

export default function Home() {
  return (
    <Layout>
      <Search />
      <Result />
    </Layout>
  );
}
