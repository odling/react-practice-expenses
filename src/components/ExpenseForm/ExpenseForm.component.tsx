import { ExpenseForm as TypeDef } from "../components";
import "./ExpenseForm.styles.css";

export const ExpenseForm: TypeDef = () => {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-31-12" />
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </div>
  );
};
