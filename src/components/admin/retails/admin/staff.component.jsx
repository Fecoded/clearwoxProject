import { Fragment } from 'react'

import Staff from './staff-management.component'
import PageHeader from '../sales/page-header.component'

const Staffs = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Staff'} />
                <Staff />
            </div>
        </div>
    </Fragment>
)

export default Staffs