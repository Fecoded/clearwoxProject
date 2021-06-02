import { Fragment } from 'react'

import ExpenseList from './expenseList-component'
import PageHeader from '../sales/page-header.component'

const Expenses = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Expenses'} />
                <ExpenseList />
            </div>
        </div>
    </Fragment>
)

export default Expenses
