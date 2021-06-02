import { Fragment } from 'react'

import Designation from './staff-designation.component'
import PageHeader from '../sales/page-header.component'

const Designations = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Designation'} />
                <Designation />
            </div>
        </div>
    </Fragment>
)

export default Designations