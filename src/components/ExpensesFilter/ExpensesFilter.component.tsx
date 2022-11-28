import { useState } from "react";
import { Card } from "../../components";
import { ValueOf } from "../../core/core";
import "./ExpensesFilter.styles.css";

type Year = "2022" | "2021" | "2020" | "2019";
const yearOptions: Year[] = ["2022", "2021", "2020", "2019"];

export const ExpensesFilter = () => {
  const [selection, setSelection] = useState<Year>("2022");

  const updateSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection(e.target.value as Year);
  };

  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={updateSelection}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </Card>
  );
};
