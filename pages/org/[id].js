import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import { data } from '../../utils/data';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const item = data.find((i) => i.id === id);
  return <Layout>{item ? JSON.stringify(item) : `404 not found`}</Layout>;
}
