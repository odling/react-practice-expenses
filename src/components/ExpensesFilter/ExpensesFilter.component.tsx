import { useState } from "react";
import "./ExpensesFilter.styles.css";
import { ExpensesFilter as TypeDef } from "../components";

type Year = TypeDef.Year;
const yearOptions: Year[] = ["2022", "2021", "2020", "2019"];

export const ExpensesFilter: TypeDef = (props) => {
  const { onFilterChange } = props;
  const [selection, setSelection] = useState<Year>("2022");

  const updateSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection(e.target.value as Year);
    onFilterChange({ year: e.target.value });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={updateSelection} value={selection}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
