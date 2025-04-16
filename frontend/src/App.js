// src/App.js
import React, { useState } from 'react';
import SourceSelectionPage from './pages/SourceSelectionPage';
import ConfigForm from './components/ConfigForm';
import SchemaViewer from './components/SchemaViewer';
import { connectClickHouse, fetchSchema, startIngestion } from './services/api';

function App() {
  const [step, setStep] = useState(1);
  const [columns, setColumns] = useState([]);
  const [selectedCols, setSelectedCols] = useState([]);

  const handleColumnToggle = (col) => {
    setSelectedCols((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  const handleConnect = async (config) => {
    await connectClickHouse(config);
    const schema = await fetchSchema();
    setColumns(schema.columns); // Adjust according to backend response
    setStep(3);
  };

  const handleIngest = async () => {
    const result = await startIngestion(selectedCols);
    console.log(result); // Show result somewhere
  };

  return (
    <div>
      {step === 1 && <SourceSelectionPage onSelect={() => setStep(2)} />}
      {step === 2 && <ConfigForm onConnect={handleConnect} />}
      {step === 3 && (
        <>
          <SchemaViewer
            columns={columns}
            selected={selectedCols}
            onChange={handleColumnToggle}
          />
          <button onClick={handleIngest}>Start Ingestion</button>
        </>
      )}
    </div>
  );
}

export default App;
