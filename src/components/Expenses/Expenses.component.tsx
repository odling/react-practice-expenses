import { useState } from "react";
import {
  Card,
  DropdownInput,
  ExpensesChart,
  ExpensesList
} from "../../components";
import {
  Expenses as TypeDef,
  DropdownInput as DropdownType
} from "../components";
import "./Expenses.styles.css";

const yearOptions: DropdownType.Option[] = [
  {
    value: null,
    label: "All"
  },
  { value: 2022, label: "2022" },
  { value: 2021, label: "2021" },
  { value: 2020, label: "2020" },
  { value: 2019, label: "2019" }
];

export const Expenses: TypeDef = (props) => {
  const { expenseData } = props;
  const [filter, setFilter] = useState();

  const handleFilterChange = ({ value }) => {
    setFilter(value);
  };

  const applyFilter = (expense: TypeDef.Expense): boolean => {
    if (!filter) return true;
    return expense.date.getFullYear().toString() === filter;
  };

  const filteredData = expenseData.filter(applyFilter);

  return (
    <Card className="expenses">
      <ExpensesChart expenseData={filteredData} />
      <DropdownInput
        onChange={handleFilterChange}
        value={filter}
        title="Filter by year"
        options={yearOptions}
      />
      <ExpensesList items={filteredData} emptyLabel="No expenses found..." />
    </Card>
  );
};
