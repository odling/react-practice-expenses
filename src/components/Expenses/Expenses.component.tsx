import { useState } from "react";
import { ExpenseItem, Card, ExpensesFilter } from "../../components";
import { Expenses as TypeDef } from "../components";
import "./Expenses.styles.css";
import { ExpensesFilter as ExpensesFilterType } from "../components";

type FilterProps = ExpensesFilterType.onFilterChangeProps;

export const Expenses: TypeDef = (props) => {
  const { expenseData } = props;
  const [filter, setFilter] = useState("");

  const handleFilterChange = ({ year }: FilterProps) => {
    setFilter(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={handleFilterChange} />
      {expenseData.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};
