import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import AddOutlet from '../../modal/addOutlet.component';
import EditOutlet from '../../modal/editOutlet.component';
import Alert from '../../../alert/alert.component'

import { getOutlets, deleteOutlet } from '../../../../redux/retail/retail.action'
import { selectOutlet } from '../../../../redux/retail/retail.selector'

const Outlets = ({ outlets, deleteOutlet, getOutlets }) => {
    const [outlet, setOutlet] = useState('')

    useEffect(() => {
        getOutlets()
    }, [getOutlets])

    const onDelete = () => {};

    const onRefresh = () => getOutlets()

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Outlets</h6>
                <div className="text-right">
                    <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addOutletModal">
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
        {outlets.length > 0 ? (
              
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {outlets.map(outlet => (
                                        <tbody key={outlet.id}>
                                            <tr className="cursor-pointer">
                                        <td>{outlet.code}</td>
                                        <td>{outlet.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editOutletModal" onClick={() => setOutlet(outlet)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>

                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Outlet",
                                                            text: `Are you sure you want to delete ${outlet.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                              deleteOutlet(outlet.id)
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
    <AddOutlet />  
    <EditOutlet outlet={outlet} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    outlets: selectOutlet,
})

const mapDispatchToProps = dispatch => ({
    getOutlets: () => dispatch(getOutlets()),
    deleteOutlet: (code) => dispatch(deleteOutlet(code))
})

Outlets.propTypes = {
    outlets: PropTypes.array,
    getOutlets: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Outlets)