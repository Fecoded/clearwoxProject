import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'


import AddDesignation from '../../modal/addDesignation.component';
import EditDesignation from '../../modal/editDesignation.component';

import { getDesignation, deleteDesignation } from '../../../../redux/retail/retail.action'
import { selectDesignation } from '../../../../redux/retail/retail.selector'

const Designation = ({ getDesignation, deleteDesignation, designations }) => {
    const [designation, setDesignation] = useState('')

    useEffect(() => {
        getDesignation()
    }, [getDesignation])

    const onDelete = () => {};

    const onRefresh = () => getDesignation();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Designations</h6>

                    <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#adddesignationModal">
                             <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>

            <div className="card-body">
            {designations.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {designations.map(designation => (
                                        <tbody key={designation.id}>
                                            <tr className="cursor-pointer">
                                        <td>{designation.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editdesignationModal" onClick={() => setDesignation(designation)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                          
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Designation",
                                                            text: `Are you sure you want to delete ${designation.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                                deleteDesignation(designation.id)
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
                        No Designation Available
                    </div>
            )}
            </div>

            </div>
    </div>
    <AddDesignation />  
    <EditDesignation designation={designation} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    designations: selectDesignation
})

const mapDispatchToProps = dispatch => ({
    getDesignation: () => dispatch(getDesignation()),
    deleteDesignation: (id) => dispatch(deleteDesignation(id))
})

Designation.propTypes = {
    designations: PropTypes.array,
    getDesignation: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Designation)