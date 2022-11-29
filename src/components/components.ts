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
  };
}

export type ExpenseForm = Component.GenericComponent<ExpenseForm.Props>;

export namespace ExpensesFilter {
  export type Year = "2022" | "2021" | "2020" | "2019";

  export type onFilterChangeProps = {
    year: string;
  };
  export type Props = {
    onFilterChange: Action.GenericAction<onFilterChangeProps>;
  };
}

export type ExpensesFilter = Component.GenericComponent<ExpensesFilter.Props>;
