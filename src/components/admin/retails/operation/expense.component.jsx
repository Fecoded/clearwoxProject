import { Fragment } from 'react'

import ExpenseItem from './expenses-item.component'
import PageHeader from '../sales/page-header.component'

const Expense = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Manage Expenses'} />
                <ExpenseItem />
            </div>
        </div>
    </Fragment>
)

export default Expense
