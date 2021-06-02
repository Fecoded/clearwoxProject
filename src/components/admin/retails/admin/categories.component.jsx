import { Fragment } from 'react'

import Category from './product-categories.component'
import PageHeader from '../sales/page-header.component'

const Categories = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Categories'} />
                <Category />
            </div>
        </div>
    </Fragment>
)

export default Categories