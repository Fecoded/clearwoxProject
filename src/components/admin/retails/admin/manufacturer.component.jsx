import { Fragment } from 'react'

import Manufacturer from './product-manufacturer.component'
import PageHeader from '../sales/page-header.component'

const ManufacturerContent = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Manufacturers'} />
                <Manufacturer />
            </div>
        </div>
    </Fragment>
)

export default ManufacturerContent
