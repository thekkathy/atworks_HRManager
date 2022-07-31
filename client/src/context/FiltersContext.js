import React, { createContext, useState } from "react";

const FiltersContext = createContext({Filters: [], updateFilters: ([]) => {}});

const FiltersProvider = ({ children }) => {
  const [Filters, setFilters] = useState([]);

  const updateFilters = (newFiltersList) => {
    setFilters([...newFiltersList])
  }

  return (
    <FiltersContext.Provider value={{ Filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;

export { FiltersContext };
