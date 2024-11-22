import { useState } from "react";
import ExpenseListt from "./Expense-tracker2/Components/ExpenseListt";
import Expensefilterr from "./Expense-tracker2/Components/Expensefilterr";
import ExpenseForrm from "./Expense-tracker2/Components/ExpenseForrm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 78, category: "groceries" },
    { id: 2, description: "bbb", amount: 99, category: "entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseForrm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <Expensefilterr
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <ExpenseListt
          expense={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
