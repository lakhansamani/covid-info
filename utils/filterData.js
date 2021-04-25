export const hasFilter = (filters) =>
  Object.keys(filters).some((i) => filters[i].length);

export const filter = (data, filters, fuseInstance) => {
  let res = [...data];
  if (filters.search.trim()) {
    const searchData = fuseInstance.search(filters.search);
    res = searchData.map((item) => item.item);
  }

  if (filters.cities.length) {
    res = res.filter((item) => filters.cities.includes(item.city));
  }

  if (filters.services.length) {
    res = res.filter((item) => filters.services.includes(item.category));
  }

  if (filters.beds.length) {
    res = res.filter((item) => {
      if (filters.beds === 'Yes') return item.is_available === true;
      return item.is_available === false;
    });
  }

  return res;
};
