import React from 'react';

function TableSelector({ tables, onSelect }) {
  return (
    <div>
      <h3>Select Table</h3>
      <select onChange={(e) => onSelect(e.target.value)}>
        {tables.map((table, idx) => (
          <option key={idx} value={table}>{table}</option>
        ))}
      </select>
    </div>
  );
}

export default TableSelector;
