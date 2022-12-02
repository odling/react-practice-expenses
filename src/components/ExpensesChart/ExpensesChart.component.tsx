import { ExpensesChart as TypeDef } from "../components";
import { Card, Chart } from "../../components";
import "./ExpensesChart.styles.css";

export const ExpensesChart: TypeDef = (props) => {
  const { expenseData } = props;

  const initialData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  expenseData.forEach((expense) => {
    const monthIndex = expense.date.getMonth();
    initialData[monthIndex].value += expense.amount;
  });

  return (
    <Card className="expenses-chart">
      <label>Expense Distribution</label>
      <Chart dataPoints={initialData} />
    </Card>
  );
};
