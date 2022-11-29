import { ExpenseForm } from "..";
import { NewExpense as TypeDef } from "../components";
import "./NewExpense.styles.css";

export const NewExpense: TypeDef = (props) => {
  const { onAddExpense } = props;
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onAddExpense} />
    </div>
  );
};
