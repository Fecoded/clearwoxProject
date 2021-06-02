import { Fragment } from 'react'

import AdjustmentTypes from './inventory.adjustment-types'
import PageHeader from '../sales/page-header.component'

const AdjustStock = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Adjustment Types'} />
                <AdjustmentTypes />
            </div>
        </div>
    </Fragment>
)

export default AdjustStock
