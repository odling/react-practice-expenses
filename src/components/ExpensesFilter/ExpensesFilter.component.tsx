import "./DropdownInput.styles.css";
import { DropdownInput as TypeDef } from "../components";

export const DropdownInput: TypeDef = (props) => {
  const { onChange, value, options, title } = props;

  const updateSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ value: e.target.value });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>{title}</label>
        <select onChange={updateSelection} value={value}>
          {options.map((year) => (
            <option key={year.label} value={year.value}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
