// context/SelectedRowsContext.js
import React, { createContext, useState } from 'react';

const SelectedRowsContext = createContext();

const SelectedRowsProvider = ({ children }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <SelectedRowsContext.Provider value={{ selectedRows, setSelectedRows }}>
      {children}
    </SelectedRowsContext.Provider>
  );
};

export { SelectedRowsProvider, SelectedRowsContext };
