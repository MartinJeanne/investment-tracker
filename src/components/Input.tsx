import { useState } from 'react'
import '../styles/input.css'

import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

type TransactionProps = {
    handleSubmit: (obj: InputResponse) => void;
};

type InputResponse = {
    date: string | undefined,
    type: string,
    quantity: number | null | undefined,
    cost: number | null | undefined
}

export default function Input({ handleSubmit }: TransactionProps) {
    const [date, setDate] = useState<Date | undefined>();
    const [type, setType] = useState<string>('Type');
    const [quantity, setQuantity] = useState<number | null | undefined>(1);
    const [cost, setCost] = useState<number | null | undefined>(10);

    function dateToString(d: Date | undefined) {
        if (!d) d = new Date();
        return d.toLocaleDateString('fr-FR');
    }

    return (
        <div className='input'>
            <FloatLabel>
                <Calendar value={date} onChange={(e) => setDate(e.value)} inputId="date" dateFormat="dd/mm/yy" />
                <label htmlFor="date">Date</label>
            </FloatLabel>

            <InputText value={type} onChange={(e) => setType(e.target.value)} />

            <InputNumber value={quantity} onValueChange={(e) => setQuantity(e.value)} useGrouping={false} showButtons mode="decimal" />

            <InputNumber value={cost} onValueChange={(e) => setCost(e.value)} inputId="currency-germany" showButtons mode="currency" currency="EUR" locale="de-DE" />

            <Button className='submit' label="submit" onClick={() => { handleSubmit({ date: dateToString(date), type, quantity, cost }) }} />
        </div>
    )
}
