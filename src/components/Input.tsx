import { useState } from 'react'
import '../styles/input.css'

import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

import { Transaction } from '../types/types'

type TransactionProps = {
    handleSubmit: (obj: Transaction) => void;
};

export default function Input({ handleSubmit }: TransactionProps) {
    const [date, setDate] = useState<Date | null | undefined>(new Date());
    const [type, setType] = useState<string>('Type');
    const [quantity, setQuantity] = useState<number | null | undefined>(1);
    const [cost, setCost] = useState<number | null | undefined>(10);

    function handleSubmitSafe() {
        if (!date) return;
        if (type==='') return;
        if (!quantity) return;
        if (!cost) return;

        const dateSTR = date.toLocaleDateString('fr-FR');
        handleSubmit({ date: dateSTR, type, quantity, cost });
    }

    return (
        <div className='input'>
            <FloatLabel>
                <Calendar value={date} onChange={(e) => setDate(e.value)} inputId="date" dateFormat="dd/mm/yy" invalid={!date} />
                <label htmlFor="date">Date</label>
            </FloatLabel>

            <InputText value={type} onChange={(e) => setType(e.target.value)} invalid={type===''} />

            <InputNumber value={quantity} onValueChange={(e) => setQuantity(e.value)} useGrouping={false} showButtons mode="decimal" invalid={!quantity} />

            <InputNumber value={cost} onValueChange={(e) => setCost(e.value)} inputId="currency-germany" showButtons mode="currency" currency="EUR" locale="de-DE" invalid={!cost} />

            <Button className='submit' label="submit" onClick={() => { handleSubmitSafe() }} />
        </div>
    )
}
