import { useState } from "react";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import categories from "./Expense-tracker/categories";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 30, category: "Entertainment" },
    { id: 2, description: "cvv", amount: 30, category: "all" },
    { id: 3, description: "eee", amount: 30, category: "all" },
    { id: 4, description: "ewe", amount: 30, category: "all" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
    <div className="mb-5">
    <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length+1 }])} />
  </div>

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
