import "./App.css";
import TrackingForm from "./components/TrackingForm";
import ExpensesDisplayer from "./components/ExpensesDisplayer";

function App() {
  return (
    <>
      <h1>ExpenseTracker</h1>
      <TrackingForm />
      <ExpensesDisplayer />
    </>
  );
}

export default App;
