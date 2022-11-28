import { ExpenseForm } from "..";
import { NewExpense as TypeDef } from "../components";
import "./NewExpense.styles.css";

export const NewExpense: TypeDef = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
