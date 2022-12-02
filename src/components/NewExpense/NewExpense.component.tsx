import { ExpenseForm } from "..";
import { NewExpense as TypeDef } from "../components";
import "./NewExpense.styles.css";
import { useToggle } from "../../utils/useToggle";

export const NewExpense: TypeDef = (props) => {
  const { onAddExpense } = props;
  const { value: showForm, toggler: toggleForm } = useToggle(false);
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSubmit={onAddExpense} onCancel={toggleForm} />
      ) : (
        <button className="new_expense__toggle" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
    </div>
  );
};
