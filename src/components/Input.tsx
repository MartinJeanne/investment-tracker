import { useState } from 'react'
import '../styles/Input.css'

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function Input() {
    const [count, setCount] = useState<number>(0)
    const [value, setValue] = useState('Coucou')

    return (
        <div className='input'>
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            
            <div className='test'>
                <InputNumber value={count} onValueChange={(e) => setValue(e.value)} useGrouping={false} showButtons mode="decimal" />
            </div>

            <div className='test'>
                <InputNumber inputId="currency-germany" value={count} onValueChange={(e) => setValue(e.value)} showButtons mode="currency" mode="currency" currency="EUR" locale="de-DE" />
            </div>

            <Button className='submit' label="submit" onClick={() => setCount((count) => count + 1)} />
        </div>
    )
}
