import "./App.css";
import TrackingForm from "./components/TrackingForm";
import ExpensesDisplayer from "./components/ExpensesDisplayer";
import { useState } from "react";
import FilterSelection from "./components/FilterSelection";

function App() {
  interface ExpenseItem {
    id: number;
    description: string;
    amount: number;
    category: string;
  }

  const [expenseList, setExpenseList] = useState<ExpenseItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (itemid: number) => {
    setExpenseList(expenseList.filter((item) => item.id !== itemid));
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h1>ExpenseTracker</h1>
      <div className="mb-5">
        <TrackingForm
          onSubmit={(item) =>
            setExpenseList([
              ...expenseList,
              { ...item, id: expenseList.length + 1 },
            ])
          }
        />
      </div>
      <FilterSelection onChange={handleFilter} />
      <ExpensesDisplayer
        onDelete={handleDelete}
        expenseList={expenseList.filter(
          (item) => item.category === selectedCategory || !selectedCategory
        )}
      />
    </>
  );
}

export default App;
