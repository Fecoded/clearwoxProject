import { Fragment } from 'react'

import Customer from './customer-management.component'
import PageHeader from '../sales/page-header.component'

const Customers = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Customers'} />
                <Customer />
            </div>
        </div>
    </Fragment>
)

export default Customers