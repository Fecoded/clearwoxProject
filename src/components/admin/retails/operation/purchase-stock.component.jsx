import { Fragment } from 'react'

import PurchaseStocks from './inventory-purchasestock.component'
import PageHeader from '../sales/page-header.component'

const PurchaseStock = () => (
    <Fragment>

        <div id="main">
            <div className="main-content">
                <PageHeader header={'Purchase Stock'} />
                <PurchaseStocks />
            </div>
        </div>
    </Fragment>
)

export default PurchaseStock