import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context/Context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ total, transactionsPerType, categories }, "this is the total");

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
console.log(category,"theeeee")
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  console.log(filteredCategories)

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
