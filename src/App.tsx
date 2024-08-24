import { useState, useEffect } from 'react'
import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";

import TransactionHistoy from './components/TransactionHistoy'
import Input from './components/Input'
import {Transaction} from './types/types'

function App() {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

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
    setTransactions(prevTransactions => [...prevTransactions, v]);
  }

  return (
    <PrimeReactProvider>
      <TransactionHistoy transactions={transactions} />
      <Input handleSubmit={handleSubmit} />
    </PrimeReactProvider>
  )
}

export default App
