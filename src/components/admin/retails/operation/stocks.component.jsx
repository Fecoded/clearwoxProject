import { Fragment } from 'react'

import StockList from './stocklists.component'
import PageHeader from '../sales/page-header.component'

const Stock = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Stocks'} />
                <StockList />
            </div>
        </div>
    </Fragment>
)

export default Stock
