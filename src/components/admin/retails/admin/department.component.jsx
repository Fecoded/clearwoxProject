import { Fragment } from 'react'

import Department from './product-department.component'
import PageHeader from '../sales/page-header.component'

const Departments = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Departments'} />
                <Department />
            </div>
        </div>
    </Fragment>
)

export default Departments
