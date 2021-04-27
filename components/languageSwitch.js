import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export const LanguageSwitch = () => {
  const router = useRouter();
  const { locale, locales } = router;
  const handleCityChange = (newLocale) => {
    console.log({ newLocale });
    if (locale !== newLocale) {
      console.log(`here`);
      router.push(`/${newLocale}`);
    }
  };
  return (
    <div className="mr-2">
      <Listbox value={locale} onChange={handleCityChange}>
        {({ open }) => (
          <>
            <div className="relative flex-1">
              <Listbox.Button className="relative w-full py:2 pl-3 pr-10 text-left focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded sm:text-md ">
                <span className="block">{locale}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100 z-49"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40"
                >
                  {locales.map((item) => (
                    <Listbox.Option
                      key={item}
                      className={({ active }) =>
                        `${
                          active
                            ? 'text-amber-900 bg-amber-100 bg-gray-200'
                            : 'text-gray-900'
                        }
                          select-none relative py-2  pr-4 hover:bg-gray-200 cursor-pointer`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate pl-2`}
                          >
                            {item}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
