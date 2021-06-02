import { Fragment } from 'react'

import PurchaseStockList from './purchaseStockList.component'
import PageHeader from '../sales/page-header.component'

const PurchaseStock = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Stock Details'} />
                <PurchaseStockList />
            </div>
        </div>
    </Fragment>
)

export default PurchaseStock
