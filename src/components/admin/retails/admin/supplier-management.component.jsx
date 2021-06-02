import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import { getSuppliers, deleteSupplier } from '../../../../redux/retail/retail.action'
import { selectSupplierItems  } from '../../../../redux/retail/retail.selector'

import AddSupplier from '../../modal/addSupplier.component'
import EditSupplier from '../../modal/editSupplier.component'
import Alert from '../../../alert/alert.component'

const SupplierManagement = ({ getSuppliers, suppliers, deleteSupplier }) => {
    const [supplier, setSupplier] = useState('')

useEffect(() => {
    getSuppliers()
},[getSuppliers]);

const onDelete = () => {};

const onRefresh = () => getSuppliers();

return (
<Fragment>
    <div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Suppliers</h6>
                    <div className="text-rightt">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addsupplierModal">
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
            {suppliers.length > 0 ? (
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
                                    {suppliers.map(supplier => (
                                        <tbody key={supplier.id}>
                                            <tr className="cursor-pointer">
                                        <td>{supplier.code}</td>
                                        <td>{supplier.firstName}</td>
                                        <td>{supplier.lastName}</td>
                                        <td>{supplier.fullName}</td>
                                        <td>{supplier.address}</td>
                                        <td>{supplier.mobileNo}</td>
                                        <td>{supplier.email}</td>
                                        <td className="text-right">
                                                {/* <button className="dropdown-item">
                                                    <i className="fa fa-plus mr-2"></i> View Details
                                                </button> */}
                                                <button
                                                 className="btn btn-sm btn-default ml-1" 
                                                 onClick={() => setSupplier(supplier)}
                                                 data-toggle="modal" 
                                                 data-target="#editsupplierModal"
                                                  >
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                           
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                     swal({
                                                        title: "Delete Supplier",
                                                        text: `Are you sure you want to delete ${supplier.fullName}`,
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((confirm) => {
                                                        if (confirm) {
                                                          deleteSupplier(supplier.id)
                                                        } 
                                                })
                                                )}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                       
                                        </td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
            ) : (
                <div className="d-flex justify-content-center mb-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            )}
            </div>
            </div>

    </div>  
    <AddSupplier />
    <EditSupplier supplier={supplier} />

</Fragment>
)};

const mapStateToProps = createStructuredSelector({
    suppliers: selectSupplierItems,
})

const mapDispatchToProps = dispatch => ({
    getSuppliers: () => dispatch(getSuppliers()),
    deleteSupplier: (code) => dispatch(deleteSupplier(code))
})

SupplierManagement.propTypes = {
    getSuppliers: PropTypes.func,
    suppliers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierManagement);