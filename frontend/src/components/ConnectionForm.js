import React, { useState } from 'react';
import axios from 'axios';

function ConnectionForm({ onConnected }) {
  const [form, setForm] = useState({
    host: 'localhost',
    port: 8123,
    database: 'default',
    user: 'default',
    token: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/clickhouse/connect', form);
      onConnected(res.data);  // callback to parent with tables
    } catch (err) {
      alert("Connection failed: " + err.message);
    }
  };

  return (
    <div>
      <h2>Connect to ClickHouse</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          value={form[key]}
          placeholder={key}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>Connect</button>
    </div>
  );
}

export default ConnectionForm;
