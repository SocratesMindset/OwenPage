import React, { useEffect, useState } from "react";
import { TestResult } from "../types/TestResult";
import { fetchTestResults } from "../api/fetchTestResults";

export const TestResultTable: React.FC = () => {
  const [data, setData] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTestResults()
      .then((results) => setData(results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <table border={1} cellPadding={8} cellSpacing={0}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название теста</th>
          <th>Начало</th>
          <th>Окончание</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => (
          <tr
            key={result.id}
            style={{ backgroundColor: result.success ? "#e0ffe0" : "#ffe0e0" }}
          >
            <td>{result.id}</td>
            <td>{result.testName}</td>
            <td>{new Date(result.startTime).toLocaleString()}</td>
            <td>{new Date(result.endTime).toLocaleString()}</td>
            <td>{result.success ? "✅ Успешно" : "❌ Ошибка"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
