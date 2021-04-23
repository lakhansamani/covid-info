import React, { useContext } from 'react';
import { FilterContext } from '../context/filter';

export const SingleList = ({ listData, label, filterKey }) => {
  const { filters, setFilters } = useContext(FilterContext);
  const currentSelectedFilters = filters[filterKey] || '';

  const handleChange = (e, item) => {
    const isChecked = e.target.checked;
    setFilters({
      ...filters,
      [filterKey]: isChecked ? item : '',
    });
  };

  return (
    <div>
      <div className="font-semibold text-m">{label}</div>
      {listData.map((item) => (
        <div className="block" key={item}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              checked={currentSelectedFilters == item}
              onChange={(e) => handleChange(e, item)}
            />
            <span className="ml-2 text-gray-700">{item}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
