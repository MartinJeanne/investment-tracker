import { useState } from 'react'
import '../styles/Input.css'

import { InputText } from 'primereact/inputtext';

export default function Input() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('Coucou')

    return (
        <div className='input'>
            <h1>Investment tracker</h1>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            <button className='submit' onClick={() => setCount((count) => count + 1)}>Submit {count}</button>

        </div>
    )
}
