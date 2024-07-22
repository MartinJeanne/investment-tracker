import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";

import Input from './components/Input'

function App() {
  return (
    <PrimeReactProvider>
      <Input />
    </PrimeReactProvider>
  )
}

export default App
