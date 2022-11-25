import { ExpenseForm } from "..";
import { Card } from "../Card/Card.component";
import { NewExpense as TypeDef } from "../components";
import "./NewExpense.styles.css";

export const NewExpense: TypeDef = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};
