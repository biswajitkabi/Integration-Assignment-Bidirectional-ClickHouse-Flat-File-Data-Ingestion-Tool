// src/components/SchemaViewer.jsx
import React from 'react';

const SchemaViewer = ({ columns, selected, onChange }) => (
  <div>
    <h3>Select Columns</h3>
    {columns.map((col,index) => (
      <div key={index}>
        <input
          type="checkbox"
          value={col}
          checked={selected.includes(col)}
          onChange={() => onChange(col)}
        />
        {col}
      </div>
    ))}
  </div>
);

export default SchemaViewer;
