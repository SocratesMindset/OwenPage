import React, { useState } from "react";
import { CircleDashed, Download, CheckCircle, XCircle } from "lucide-react";

interface TestResult {
  id: number;
  testname: string;
  testduration: number;
  partserialnumber: string;
  datestart: string;
  dateend: string;
  successtatus: boolean;
}

const DataFetcher: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TestResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate fetched data
      const mockData: TestResult[] = [
        {
          id: 1,
          testname: "Voltage Test",
          testduration: 120,
          partserialnumber: "VT-2025-001",
          datestart: "2025-03-15T09:00:00Z",
          dateend: "2025-03-15T09:02:00Z",
          successtatus: true,
        },
        {
          id: 2,
          testname: "Current Test",
          testduration: 180,
          partserialnumber: "CT-2025-002",
          datestart: "2025-03-15T09:15:00Z",
          dateend: "2025-03-15T09:18:00Z",
          successtatus: false,
        },
        {
          id: 3,
          testname: "Resistance Test",
          testduration: 90,
          partserialnumber: "RT-2025-003",
          datestart: "2025-03-15T09:30:00Z",
          dateend: "2025-03-15T09:31:30Z",
          successtatus: true,
        },
        {
          id: 4,
          testname: "Frequency Test",
          testduration: 150,
          partserialnumber: "FT-2025-004",
          datestart: "2025-03-15T09:45:00Z",
          dateend: "2025-03-15T09:47:30Z",
          successtatus: true,
        },
      ];

      setData(mockData);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={fetchData}
        disabled={isLoading}
        className="relative w-full py-3 px-6 mb-6 bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 
          text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 
          hover:shadow-xl flex items-center justify-center group disabled:opacity-70 disabled:hover:scale-100"
      >
        <span className="mr-2">
          {isLoading ? (
            <CircleDashed className="animate-spin" size={20} />
          ) : (
            <Download size={20} className="group-hover:animate-bounce" />
          )}
        </span>
        <span className="font-medium">
          {isLoading ? "Получение данных..." : "Получить результаты тестов"}
        </span>
      </button>

      {/* Results Display */}
      <div className="mt-4 relative overflow-hidden">
        {error && (
          <div className="p-4 bg-red-500 bg-opacity-20 backdrop-blur-md rounded-lg mb-4 border border-red-300 animate-fadeIn flex items-center">
            <XCircle size={20} className="mr-2 text-red-400" />
            <p className="text-white">{error}</p>
          </div>
        )}

        {data && (
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 animate-slideIn">
            <div className="flex items-center text-white mb-3">
              <CheckCircle size={20} className="mr-2 text-green-300" />
              <h2 className="font-semibold">Test Results Retrieved</h2>
            </div>
            <ul className="space-y-3">
              {data.map((result) => (
                <li
                  key={result.id}
                  className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-md transition-all 
                    duration-300 hover:bg-opacity-20 hover:translate-x-1"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-white">
                      {result.testname}
                    </h3>
                    {result.successtatus ? (
                      <span className="text-green-600 text-sm font-medium">
                        PASS
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm font-medium">
                        FAIL
                      </span>
                    )}
                  </div>
                  <div className="text-gray-200 text-sm space-y-1">
                    <p>Serial Number: {result.partserialnumber}</p>
                    <p>Duration: {result.testduration} seconds</p>
                    <p>Start: {formatDate(result.datestart)}</p>
                    <p>End: {formatDate(result.dateend)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
