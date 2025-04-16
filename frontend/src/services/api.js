// src/services/api.js
const BASE_URL = 'http://localhost:8123/api/clickhouse';

export const connectClickHouse = async (config) => {
  const response = await fetch(`${BASE_URL}/connect`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  });
  return response.json();
};

export const fetchSchema = async () => {
  const response = await fetch(`${BASE_URL}/schema`);
  return response.json();
};

export const startIngestion = async (columns) => {
  const response = await fetch(`${BASE_URL}/ingest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ columns })
  });
  return response.json();
};
