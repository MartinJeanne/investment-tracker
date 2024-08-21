import { useState, useEffect } from 'react'
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";

import Transaction from './components/Transaction'
import Input from './components/Input'

interface Transaction {
  date: string;
  type: string;
  quantity: number;
  cost: number;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction>();

  useEffect(() => {
    fetch('/fakeData.json')
      .then((response) => response.json())
      .then((jsonData: Transaction) => setTransactions(jsonData))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  function handleSubmit(input: Transaction) {
    addToTransactions(input);
  }

  function addToTransactions(v: Transaction) {
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
