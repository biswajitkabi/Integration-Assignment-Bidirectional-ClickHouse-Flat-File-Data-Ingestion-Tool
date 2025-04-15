import React, { useState } from 'react';
import ConnectionForm from './components/ConnectionForm';
import TableSelector from './components/TableSelector';
import CSVUploader from './components/CSVUploader';

function App() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <div className="App">
      <h1>ClickHouse Data Ingestion Tool</h1>
      <ConnectionForm onConnected={setTables} />
      {tables.length > 0 && (
        <>
          <TableSelector tables={tables} onSelect={setSelectedTable} />
          <CSVUploader />
        </>
      )}
    </div>
  );
}

export default App;
