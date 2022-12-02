/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
import { Action, Component } from "../core/core";

namespace ExpenseItem {
  export type Props = {
    amount: number;
    title: string;
    date: Date;
  };
}
export type ExpenseItem = Component.GenericComponent<ExpenseItem.Props>;

namespace ExpenseDate {
  export type Props = {
    date: Date;
  };
}

export type ExpenseDate = Component.GenericComponent<ExpenseDate.Props>;

export namespace Expenses {
  export type Expense = {
    id: string;
    title: string;
    amount: number;
    date: Date;
  };
  export type Props = {
    expenseData: Expense[];
  };
}

export type Expenses = Component.GenericComponent<Expenses.Props>;

namespace Card {
  export type Props = {};
}

export type Card = Component.GenericComponent<Card.Props>;

export namespace NewExpense {
  export type onAddExpenseProps = {
    newExpense: Expenses.Expense;
  };
  export type Props = {
    onAddExpense: Action.GenericAction<onAddExpenseProps>;
  };
}

export type NewExpense = Component.GenericComponent<NewExpense.Props>;

namespace ExpenseForm {
  export type Props = {
    onSubmit: NewExpense.Props["onAddExpense"];
    onCancel?: Action.GenericAction<void>;
  };
}

export type ExpenseForm = Component.GenericComponent<ExpenseForm.Props>;

export namespace DropdownInput {
  export type Option = {
    value: any;
    label: string;
  };
  export type onChangeProps = {
    value: string;
  };

  export type Props = {
    onChange: Action.GenericAction<onChangeProps>;
    options: Option[];
    title: string;
    value: any;
  };
}

export type DropdownInput = Component.GenericComponent<DropdownInput.Props>;

namespace ExpensesList {
  export type Props = {
    items: Expenses.Expense[];
    emptyLabel: string;
  };
}

export type ExpensesList = Component.GenericComponent<ExpensesList.Props>;

namespace Chart {
  type DataPoint = {
    value: number;
    label: string;
    id?: string;
  };
  export type Props = {
    dataPoints: DataPoint[];
  };
}

export type Chart = Component.GenericComponent<Chart.Props>;

namespace ChartBar {
  export type Props = {
    value: number;
    maxValue: number;
    label: string;
  };
}

export type ChartBar = Component.GenericComponent<ChartBar.Props>;

namespace ExpensesChart {
  export type Props = {
    expenseData: Expenses.Expense[];
  };
}

export type ExpensesChart = Component.GenericComponent<ExpensesChart.Props>;
