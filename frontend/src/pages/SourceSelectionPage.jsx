import React from 'react';

const SourceSelectionPage = ({ onSelect }) => {
  return (
    <div>
      <h2>Select Source</h2>
      <button onClick={() => onSelect('clickhouse')}>ClickHouse</button>
      <button onClick={() => onSelect('csv')}>Flat File (CSV)</button>
    </div>
  );
};

export default SourceSelectionPage;
