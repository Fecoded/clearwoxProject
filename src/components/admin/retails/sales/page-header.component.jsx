import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({ header }) => (
    <div className="page-header">
        <div className="container-fluid d-sm-flex justify-content-between">
            {/* <h4>Retails</h4> */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                    </li>
                <li className="breadcrumb-item active" aria-current="page">{header}</li>
                </ol>
            </nav>
        </div>
</div>
)
export default PageHeader