import "./DropdownInput.styles.css";
import { DropdownInput as TypeDef } from "../components";

export const DropdownInput: TypeDef = (props) => {
  const { onChange, options, title, value } = props;

  const updateSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({ value: e.target.value });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>{title}</label>
        <select onChange={updateSelection} value={value}>
          {options?.map((option) => (
            <option
              key={option.value}
              label={option.label}
              value={option.value}
            ></option>
          ))}
        </select>
      </div>
    </div>
  );
};
