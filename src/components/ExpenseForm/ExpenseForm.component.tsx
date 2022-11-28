import { useState } from "react";
import { ExpenseForm as TypeDef } from "../components";
import "./ExpenseForm.styles.css";

const initialFormValues = {
  title: "",
  amount: "",
  date: ""
};

export const ExpenseForm: TypeDef = () => {
  const [formInputs, setFormInputs] = useState<typeof initialFormValues>(
    initialFormValues
  );

  const updateField = (fieldName: keyof typeof initialFormValues) => {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormInputs((prevState) => ({
        ...prevState,
        [fieldName]: e.target.value
      }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formInputs);
    setFormInputs(initialFormValues);
  };

  return (
    <form className="new-expense__controls" onSubmit={handleSubmit}>
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          onChange={updateField("title")}
          value={formInputs.title}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={updateField("amount")}
          value={formInputs.amount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-31-12"
          onChange={updateField("date")}
          value={formInputs.date}
          placeholder=""
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
