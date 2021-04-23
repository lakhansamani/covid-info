import { MultiList } from './multiList';
import { SingleList } from './singleList';
import { data } from '../utils/data';
import uniq from 'lodash/uniq';

export function SideMenu() {
  return (
    <div>
      <h2 className="text-xl font-bold">COVID-19 </h2>
      <h2 className="text-l font-semibold">Information Center</h2>
      <p className="mt-3 text-l text-gray-800">
        Get information about COVID-19 hospitals, beds, oxygen, medicine,
        doctors and other services
      </p>
      <div className="my-5 border-solid border border-gray-700" />
      <MultiList
        listData={uniq(data.map((i) => i.city))}
        label="Filter Cities"
        filterKey="cities"
      />
      <p className="italic text-sm">More cities, coming soon!</p>
      <br />
      <MultiList
        listData={uniq(data.map((i) => i.category))}
        label="Filter Services"
        filterKey="services"
      />
      <p className="italic text-sm">More services, coming soon!</p>
      <br />
      <SingleList listData={['Yes', 'No']} label="Has Beds" filterKey="beds" />
    </div>
  );
}
