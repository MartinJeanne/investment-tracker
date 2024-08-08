import { useEffect, useState } from 'react'
import '../styles/Input.css'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

type TransactionProps = {
    transactions: any;
};

export default function Transaction({ transactions }: TransactionProps) {

    return (
        <DataTable value={transactions} tableStyle={{ width: '80vw' }}>
            <Column field="date" header="Date"></Column>
            <Column field="type" header="Type"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="cost" header="Cost"></Column>
        </DataTable>
    )
}
