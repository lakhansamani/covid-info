import 'tailwindcss/tailwind.css';
import { FilterProvider } from '../context/filter';
import { SideMenuProvider } from '../context/sideMenu';

function MyApp({ Component, pageProps }) {
  return (
    <SideMenuProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </SideMenuProvider>
  );
}

export default MyApp;
