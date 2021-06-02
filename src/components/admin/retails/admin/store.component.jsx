import { Fragment } from 'react'

import StoreList from './storeList.component'
import PageHeader from '../sales/page-header.component'

const Stores = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader header={'Stores'} />
                <StoreList />
            </div>
        </div>
    </Fragment>
)

export default Stores
