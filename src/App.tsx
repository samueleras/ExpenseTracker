import "./App.css";
import TrackingForm from "./components/TrackingForm";
import ExpensesDisplayer from "./components/ExpensesDisplayer";
import { useState } from "react";

function App() {
  interface ExpenseItem {
    description: string;
    amount: number;
    category: number;
  }

  const [expenseList, setExpenseList] = useState<ExpenseItem[]>([]);

  const onSubmit = (item: ExpenseItem) => {
    setExpenseList([...expenseList, item]);
    console.log(expenseList);
  };

  const onDelete = () => {};

  return (
    <>
      <h1>ExpenseTracker</h1>
      <TrackingForm onSubmit={onSubmit} />
      <ExpensesDisplayer onDelete={onDelete} expenseList={expenseList} />
    </>
  );
}

export default App;
