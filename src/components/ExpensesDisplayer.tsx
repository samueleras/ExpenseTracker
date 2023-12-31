interface ExpenseItem {
  description: string;
  amount: number;
  category: number;
}

interface Props {
  expenseList: ExpenseItem[];
  onDelete: (item: ExpenseItem) => void;
}

const ExpensesDisplayer = ({ expenseList, onDelete }: Props) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>

          {expenseList.map((item) => {
            return (
              <tr>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </>
  );
};

export default ExpensesDisplayer;
