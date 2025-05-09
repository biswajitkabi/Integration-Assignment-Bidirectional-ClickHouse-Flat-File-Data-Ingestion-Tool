import React, { useState } from 'react';
import { connectClickHouse } from '../services/api';

// type onfunction = (tables: string[]) => void;
//@ts-ignore
function ConfigForm({ onConnect }) {
  const [config, setConfig] = useState({
    host: 'localhost',
    port: 8123,
    database: 'default',
    user: 'default',
    token: ''
  });

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
   
      const tables = await connectClickHouse(config);
      onConnect(tables);
      console.log("tables", tables); // This returns list of tables
    
  };

  return (
    <div>
      <h3>ClickHouse Connection</h3>
      {Object.entries(config).map(([k, v]) => (
        <input
          key={k}
          name={k}
          value={v}
          placeholder={k}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>Connect</button>
    </div>
  );
}

export default ConfigForm;
