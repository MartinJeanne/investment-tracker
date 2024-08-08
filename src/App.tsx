import { useState } from 'react'
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";

import Transaction from './components/Transaction'
import Input from './components/Input'

const initialTransactions = [
  { date: '1', type: 'Laptop', quantity: 15, cost: 1 },
  { date: '1', type: 'Smartphone', quantity: 50, cost: 1 },
  { date: '1', type: 'Desk Chair', quantity: 10, cost: 1 },
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);


  function handleSubmit(input) {
    addToTransactions(input);
  }

  function addToTransactions(v) {
    setTransactions([...transactions, { date: v.date, type: v.type, quantity: v.quantity, cost: v.cost }])
  }

  return (
    <PrimeReactProvider>
      <Transaction transactions={transactions} />
      <Input handleSubmit={handleSubmit} />
    </PrimeReactProvider>
  )
}

export default App
