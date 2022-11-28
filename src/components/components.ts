/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
import { Component } from "../core/core";

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

namespace Expenses {
  type Expense = {
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

namespace NewExpense {
  export type Props = {};
}

export type NewExpense = Component.GenericComponent<NewExpense.Props>;

namespace ExpenseForm {
  export type Props = {};
}

export type ExpenseForm = Component.GenericComponent<ExpenseForm.Props>;

namespace ExpensesFilter {
  export type Props = {};
}

export type ExpensesFilter = Component.GenericComponent<ExpensesFilter.Props>;
