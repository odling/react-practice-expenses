import { ExpensesList as TypeDef } from "../components";
import { ExpenseItem } from "../../components";
import "./ExpensesList.styles.css";

export const ExpensesList: TypeDef = (props) => {
  const { items, emptyLabel } = props;

  if (items.length === 0) {
    return <p className="expenses-list__fallback">{emptyLabel}</p>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};
