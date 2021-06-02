import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import AddDepartment from '../../modal/addDepartment.component';
import EditDepartment from '../../modal/editDepartment.component';
import Alert from '../../../alert/alert.component'

import { getDepartments, deleteDepartment } from '../../../../redux/retail/retail.action'
import { selectDepartmentItems} from '../../../../redux/retail/retail.selector'

const ProductDepartment = ({ getDepartments, departments, deleteDepartment }) => {
    const [department, setDepartment] = useState('')

    useEffect(() => {
        getDepartments()
    }, [getDepartments])

    const onDelete = () => {}

    const onRefresh = () => getDepartments()

return(
    <Fragment>
        <div className="container-fluid">
         <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h6 className="card-title font-size-22">Departments</h6>
                        <div className="text-right">
                            <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#adddepartmentModal">
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
            {departments.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {departments.map(department => (
                                        <tbody key={department.id}>
                                            <tr className="cursor-pointer">
                                        <td>{department.code}</td>
                                        <td>{department.description}</td>
                                        <td className="text-right">
                                            <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editdepartmentModal" onClick={() => setDepartment(department)}>
                                                <i className="fa fa-pencil"></i>
                                            </button>
                
                                            <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                    swal({
                                                        title: "Delete Department",
                                                        text: `Are you sure you want to delete ${department.description}`,
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                    }).then((confirm) => {
                                                        if (confirm) {
                                                            deleteDepartment(department.id)
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
    <AddDepartment />  
    <EditDepartment department={department} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    departments: selectDepartmentItems,
})

const mapDispatchToProps = dispatch => ({
    getDepartments: () => dispatch(getDepartments()),
    deleteDepartment: (code) => dispatch(deleteDepartment(code))
})

ProductDepartment.propTypes = {
    departments: PropTypes.array,
    getDepartments: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDepartment)