import { Fragment } from 'react'


import OutletList from './outLetList.component'
import PageHeader from '../sales/page-header.component'

const Outlets = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Outlets'} />
                <OutletList />
            </div>
        </div>
    </Fragment>
)

export default Outlets
