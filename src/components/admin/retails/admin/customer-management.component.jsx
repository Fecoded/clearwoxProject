import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import { getCustomers, deleteCustomer } from '../../../../redux/retail/retail.action'
import { selectCustomerItems } from '../../../../redux/retail/retail.selector'

import AddCustomer from '../../modal/addCustomer.component'
import EditCustomer from '../../modal/editCustomer.component'
import Alert from '../../../alert/alert.component'

const CustomerManagement = ({ getCustomers, customers, deleteCustomer }) => {
    const [customer, setCustomer] = useState('')

useEffect(() => {
    getCustomers()
},[getCustomers]);

const onDelete = () => {};

const onRefresh = () => getCustomers();

return (
<Fragment>
    <div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Customers</h6>
                    <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addcustomerModal">
                             <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
            <Alert />
        </div>
            <div className="card-body">
             {customers.length > 0 ? 
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Fullname</th>
                                        <th>Address</th>
                                        <th>Moblie No</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {customers.map(customer => (
                                        <tbody key={customer.id}>
                                            <tr className="cursor-pointer">
                                        <td>{customer.code}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.fullName}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.mobileNo}</td>
                                        <td>{customer.email}</td>
                                        <td className="text-right">
                                            
                                                {/* <button className="dropdown-item">
                                                    <i className="fa fa-plus mr-2"></i> View Details
                                                </button> */}
                                                <button
                                                 className="btn btn-sm btn-default ml-1" 
                                                 onClick={() => setCustomer(customer)}
                                                 data-toggle="modal" 
                                                 data-target="#editcustomerModal"
                                                  >
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                            
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                     swal({
                                                        title: "Delete Customer",
                                                        text: `Are you sure you want to delete ${customer.fullName}`,
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((confirm) => {
                                                        if (confirm) {
                                                          deleteCustomer(customer.id)
                                                        } 
                                                })
                                                )}>
                                                     <i className="fa fa-trash"></i>
                                                </button>
                                         
                                        </td>
                                    </tr>
                                </tbody>
                                )) 
                            }
                            </table>
                        </div>
            : (
                                    
                <div className="d-flex justify-content-center mb-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            
        )
}
            </div>
            </div>
    </div>  
    <AddCustomer />
    <EditCustomer customer={customer} />

</Fragment>
)};

const mapStateToProps = createStructuredSelector({
    customers: selectCustomerItems,
})

const mapDispatchToProps = dispatch => ({
    getCustomers: () => dispatch(getCustomers()),
    deleteCustomer: (code) => dispatch(deleteCustomer(code))
})

CustomerManagement.propTypes = {
    getCustomers: PropTypes.func,
    customers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);