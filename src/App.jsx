// src/app.jsx
import React from 'react';
import PageMain from './layout/pagemain';
import { SelectedRowsProvider } from './context/SelectedRowsContext';

function App() {
  return (
    <SelectedRowsProvider>
      <PageMain />
    </SelectedRowsProvider>
  );
}

export default App;
