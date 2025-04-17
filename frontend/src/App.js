// src/App.js
import React, { useState } from 'react';
import SourceSelectionPage from './pages/SourceSelectionPage';
import ConfigForm from './components/ConfigForm';
import SchemaViewer from './components/SchemaViewer';
import { connectClickHouse, startIngestion } from './services/api';

function App() {
  const [step, setStep] = useState(1);
  const [columns, setColumns] = useState([]);
  const [selectedCols, setSelectedCols] = useState([]);
  const [error, setError] = useState('');

  const handleColumnToggle = (col) => {
    setSelectedCols((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    );
  };

  const handleConnect = async (config) => {
   
      setError('');
      const tables = await connectClickHouse(config); 
      console.log("tables", tables); // This returns list of tables
      setColumns(tables); // Wrap each as object for SchemaViewer
      setStep(3);
   
  };

  const handleIngest = async () => {
    try {
      setError('');
      const result = await startIngestion(selectedCols);
      console.log(result);
      alert('Ingestion started!');
    } catch (err) {
      setError('Ingestion failed.');
      console.error('Ingestion error:', err);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>ClickHouse Ingestion Tool</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {step === 1 && <SourceSelectionPage onSelect={() => setStep(2)} />}
      {step === 2 && <ConfigForm onConnect={handleConnect} />}
      {step === 3 && (
        <>
          <SchemaViewer
            columns={columns}
            selected={selectedCols}
            onChange={handleColumnToggle}
          />
          <button onClick={handleIngest} style={{ marginTop: '1rem' }}>
            Start Ingestion
          </button>
        </>
      )}
    </div>
  );
}

export default App;


