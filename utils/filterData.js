export const hasFilter = (filters) =>
  Object.keys(filters).some((i) => filters[i].length);

export const highlightSearch = (string, searchQuery) => {
  const reg = new RegExp(
    searchQuery.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
    'i'
  );

  return string.replace(
    reg,
    (str) => `<mark class='bg-yellow-200'>${str}</mark>`
  );
};

export const filter = (data, filters) => {
  let res = [...data];
  if (filters.search.trim()) {
    const searchFields = ['name', 'contact', 'address', 'city'];
    const searchString = filters.search.toLowerCase();
    res = res.reduce((acc, item) => {
      let hasSearchTerm = false;
      const itemToReturn = { ...item };
      searchFields.forEach((field) => {
        const fieldVal = item[field].toString().toLowerCase();
        if (fieldVal.includes(searchString)) {
          hasSearchTerm = true;
          itemToReturn[field] = highlightSearch(fieldVal, searchString);
        }
      });

      if (hasSearchTerm) {
        return [...acc, itemToReturn];
      }

      return acc;
    }, []);
  }

  if (filters.city.length) {
    res = res.filter((item) => filters.city === item.city);
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
