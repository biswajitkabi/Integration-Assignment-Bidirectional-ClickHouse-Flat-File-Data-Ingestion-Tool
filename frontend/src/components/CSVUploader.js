import React, { useState } from 'react';
import axios from 'axios';

function CSVUploader() {
  const [file, setFile] = useState();

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post('http://localhost:8080/api/clickhouse/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Uploaded!");
  };

  return (
    <div>
      <h3>Upload CSV</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default CSVUploader;
