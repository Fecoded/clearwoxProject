import { Fragment } from 'react'

import AdjustStocks from './adjust-stock.component'
import PageHeader from '../sales/page-header.component'

const AdjustStock = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Adjust Stocks'} />
                <AdjustStocks />
            </div>
        </div>
    </Fragment>
)

export default AdjustStock
