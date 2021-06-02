import { Fragment } from 'react'

import Product from './product-service.component'
import PageHeader from '../sales/page-header.component'

const AdminContent = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Product & Services'} />
                <Product />
            </div>
        </div>
    </Fragment>
)

export default AdminContent
