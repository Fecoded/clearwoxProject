import { Fragment } from 'react'
import Header from './header.component'
import Sidebar from './retails/sidenavbar.component'

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Sidebar />
        </Fragment>
    )
}

export default Dashboard