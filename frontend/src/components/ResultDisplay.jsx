const ResultDisplay = ({ result }) => (
    <div>
      <h4>Result</h4>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
  