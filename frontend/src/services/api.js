// src/services/api.js
import axios from 'axios';
const BASE_URL = "http://localhost:8080/api/clickhouse/tables?host=http://localhost&port=8123&database=default&user=default&token=";

export const connectClickHouse = async (config) => {

  const data = await(await axios.get(BASE_URL)).data;
  console.log(data)

  return (data); // Assuming data is an array of table names
};

export const fetchSchema = async () => {
  const response = await fetch(`${BASE_URL}/schema`);

  if (!response.ok) {
    throw new Error("Failed to fetch schema");
  }

  return response.json(); // expected: { columns: [] }
};

export const startIngestion = async (columns) => {
  const response = await fetch(`${BASE_URL}/ingest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ columns })
  });

  if (!response.ok) {
    throw new Error("Ingestion failed");
  }

  return response.json(); // returns result message or status
};
