import { ExpenseItem, Card, ExpensesFilter } from "../../components";
import { Expenses as TypeDef } from "../components";
import "./Expenses.styles.css";

export const Expenses: TypeDef = (props) => {
  const { expenseData } = props;
  return (
    <>
      <ExpensesFilter />
      <Card className="expenses">
        {expenseData.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </>
  );
};
