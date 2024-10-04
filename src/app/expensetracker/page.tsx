"use client";
import { useState, ChangeEvent } from "react";
import { TrashIcon } from "lucide-react";


// Define the expense type
interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
}

// Expense List Item Component
function ExpenseItem({
  expense,
  deleteExpense,
}: {
  expense: Expense;
  deleteExpense: (id: number) => void;
}) {
  return (
    <div className="p-6 rounded-lg backdrop-blur-glass bg-transparent shadow-lg border border-gray-600 flex justify-between items-start hover:border-white/50">
      <div>
        <h3 className="text-xl font-semibold mb-2">{expense.name}</h3>
        <p className="text-lg mb-1">$ {expense.amount}</p>
        <p className="text-sm text-gray-400">{expense.date}</p>
      </div>
      <button
        className="hover:bg-red-500 m-1 p-1 rounded-lg"
        onClick={() => deleteExpense(expense.id)}
      >
        <TrashIcon className="w-5 h-5 text-white" />
        <span className="sr-only">Delete</span>
      </button>
    </div>
  );
}

// Add Expense Modal Component
function AddExpenseModal({
  showModal,
  setShowModal,
  handleAddExpense,
  newExpense,
  handleChange,
}: {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleAddExpense: () => void;
  newExpense: { name: string; amount: string; date: string };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-lightGlass backdrop-blur-glass p-6 rounded-lg shadow-lg text-dark max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Add New Expense</h2>
        <ExpenseForm
          newExpense={newExpense}
          handleChange={handleChange}
          handleAddExpense={handleAddExpense}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}

// Form Component for adding/editing expenses
function ExpenseForm({
  newExpense,
  handleChange,
  handleAddExpense,
  setShowModal,
}: {
  newExpense: { name: string; amount: string; date: string };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddExpense: () => void;
  setShowModal: (show: boolean) => void;
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">Expense Name</label>
        <input
          type="text"
          name="name"
          value={newExpense.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          placeholder="Enter expense name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          name="amount"
          value={newExpense.amount}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button className="p-[2px] relative" onClick={handleAddExpense}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg" />
          <div className="px-8 py-2 bg-background rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            + Add Expense
          </div>
        </button>
      </div>
    </>
  );
}

// Main Expense Tracker Component
export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: "Groceries", amount: 50, date: "2024-10-01" },
    { id: 2, name: "Electricity Bill", amount: 75, date: "2024-10-02" },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [newExpense, setNewExpense] = useState<{ name: string; amount: string; date: string }>({
    name: "",
    amount: "",
    date: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    const { name, amount, date } = newExpense;
    if (name && amount && date) {
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { id: prevExpenses.length + 1, name, amount: parseFloat(amount), date },
      ]);
      setShowModal(false);
      setNewExpense({ name: "", amount: "", date: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-dark text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <button className="p-[2px] relative m-10" onClick={() => setShowModal(true)}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg" />
          <div className="px-8 py-2 bg-background rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            + Add Expense
          </div>
        </button>
      </div>

      {/* Expense List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
        ))}
      </div>

      {/* Add Expense Modal */}
      <AddExpenseModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleAddExpense={handleAddExpense}
        newExpense={newExpense}
        handleChange={handleChange}
      />
    </div>
  );
}
