import { TestResult } from "../types/TestResult";

export const fetchTestResults = async (): Promise<TestResult[]> => {
  // Вариант 1: Полностью моковые данные (без реального fetch)
  const mockData: TestResult[] = [
    {
      id: 1,
      testName: "Проверка авторизации",
      startTime: "2024-05-20T10:00:00",
      endTime: "2024-05-20T10:02:30",
      success: true,
    },
    {
      id: 2,
      testName: "Оплата заказа",
      startTime: "2024-05-20T10:05:00",
      endTime: "2024-05-20T10:07:45",
      success: false,
    },
  ];

  return Promise.resolve(mockData);
};
