import '../styles/transaction.css'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Transaction } from '../types/types'

type TransactionProps = {
    transactions: Array<Transaction>;
};

export default function TransactionHistoy({ transactions }: TransactionProps) {

    return (
        <DataTable value={transactions} className='dataTable'>
            <Column field="date" header="Date"></Column>
            <Column field="type" header="Type"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="cost" header="Cost"></Column>
        </DataTable>
    )
}
