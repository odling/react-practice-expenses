import "./ExpenseItem.styles.css";
import { Card } from "../../components";
import { ExpenseItem as TypeDef } from "../components";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate.component";

export const ExpenseItem: TypeDef = (props) => {
  const { amount, title, date } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};
