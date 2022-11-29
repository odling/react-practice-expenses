import { useState } from "react";
import { Expenses, NewExpense } from "./components";
import "./index.css";
import {
  Expenses as ExpensesType,
  NewExpense as NewExpenseType
} from "./components/components";

const initialExpenses: ExpensesType.Expense[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 460,
    date: new Date(2021, 5, 12)
  }
];

export default function App() {
  const [expenseData, setExpenseData] = useState(initialExpenses);

  const handleAddExpense = ({
    newExpense
  }: NewExpenseType.onAddExpenseProps) => {
    setExpenseData((prev) => [newExpense, ...prev]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenseData={expenseData} />
    </div>
  );
}
