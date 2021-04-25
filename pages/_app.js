import 'tailwindcss/tailwind.css';
import '../style.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastProvider } from 'react-toast-notifications';
import * as gtag from '../utils/gtrack';

import { FilterProvider } from '../context/filter';
import { SideMenuProvider } from '../context/sideMenu';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ToastProvider>
      <SideMenuProvider>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </SideMenuProvider>
    </ToastProvider>
  );
}

export default MyApp;
