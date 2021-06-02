import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'
import moment from 'moment'

import { getStaffs, deleteStaff } from '../../../../redux/retail/retail.action'
import { selectStaff  } from '../../../../redux/retail/retail.selector'

import AddStaff from '../../modal/addStaff.component'
import EditStaff from '../../modal/editStaff.component'

const StaffManagement = ({ getStaffs, staffs, deleteStaff }) => {
    const [staff, setStaff] = useState('')

useEffect(() => {
    getStaffs()
},[getStaffs]);

const onDelete = () => {};

const onRefresh = () => getStaffs();

return (
<Fragment>
    <div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Staff</h6>
                    <div className="text-rightt">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addstaffModal">
                            <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>
            <div className="card-body">
            {staffs.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Address</th>
                                        <th>Moblie No</th>
                                        <th>Email</th>
                                        <th>DOB</th>
                                        <th>Resumption Date</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                    {staffs.map(staff => (
                                        <tbody key={staff.id}>
                                            <tr className="cursor-pointer">
                                        <td>{staff.firstName}</td>
                                        <td>{staff.lastName}</td>
                                        <td>{staff.address}</td>
                                        <td>{staff.mobileNo}</td>
                                        <td>{staff.email}</td>
                                        <td>{moment(staff.dateOfBirth).format("YYYY-MM-DD")}</td>
                                        <td>{moment(staff.resumptionDate).format("YYYY-MM-DD")}</td>
                                      
                                        <td className="text-right">
                                                {/* <button className="dropdown-item">
                                                    <i className="fa fa-plus mr-2"></i> View Details
                                                </button> */}
                                                <button
                                                 className="btn btn-sm btn-default ml-1" 
                                                 onClick={() => setStaff(staff)}
                                                 data-toggle="modal" 
                                                 data-target="#editstaffModal"
                                                  >
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                           
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                     swal({
                                                        title: "Delete Supplier",
                                                        text: `Are you sure you want to delete ${staff.fullName}`,
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((confirm) => {
                                                        if (confirm) {
                                                            deleteStaff(staff.id)
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
                {/* <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> */}
                <h5>No Staff Found</h5>
            </div>
            )}
            </div>
            </div>
    </div>  
    <AddStaff />
    <EditStaff staff={staff} />

</Fragment>
)};

const mapStateToProps = createStructuredSelector({
    staffs: selectStaff,
})

const mapDispatchToProps = dispatch => ({
    getStaffs: () => dispatch(getStaffs()),
    deleteStaff: (id) => dispatch(deleteStaff(id))
})

StaffManagement.propTypes = {
    getStaffs: PropTypes.func,
    suppliers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffManagement);