import Button from "./Button";

interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenseList: ExpenseItem[];
  onDelete: (id: number) => void;
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
        </thead>
        <tbody>
          {expenseList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>${item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <Button color="danger" onClick={() => onDelete(item.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenseList
                .reduce((acc, item) => item.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpensesDisplayer;
