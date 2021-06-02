import { Fragment } from 'react'

import Supplier from './supplier-management.component'
import PageHeader from '../sales/page-header.component'

const Suppliers = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Suppliers'} />
                <Supplier />
            </div>
        </div>
    </Fragment>
)

export default Suppliers