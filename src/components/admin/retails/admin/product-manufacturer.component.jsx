import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import AddManufacturer from '../../modal/addmanufacturer.component';
import EditManufacturer from '../../modal/editmanufacturer.component';
import Alert from '../../../alert/alert.component'

import { getManufacturers, deleteManufacturer } from '../../../../redux/retail/retail.action'
import { selectManufacturerItems} from '../../../../redux/retail/retail.selector'

const ProductManufacturer = ({ getManufacturers, manufacturers, deleteManufacturer }) => {
    const [manufacturer, setManufacturer] = useState('')

    useEffect(() => {
        getManufacturers()
    }, [getManufacturers])

    const onDelete = () => {}

    const onRefresh = () => getManufacturers()

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Manufacturers</h6>
                <div className="text-right">
                    <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addmanufacturerModal">
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
        {manufacturers.length > 0 ? (
               
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {manufacturers.map(manufacturer => (
                                        <tbody key={manufacturer.id}>
                                            <tr className="cursor-pointer">
                                        <td>{manufacturer.code}</td>
                                        <td>{manufacturer.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editmanufacturerModal" onClick={() => setManufacturer(manufacturer)}>
                                                     <i className="fa fa-pencil"></i>
                                                </button>
                                        
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Manufacturer",
                                                            text: `Are you sure you want to delete ${manufacturer.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                              deleteManufacturer(manufacturer.id)
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
    <AddManufacturer />  
    <EditManufacturer manufacturer={manufacturer} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    manufacturers: selectManufacturerItems,
})

const mapDispatchToProps = dispatch => ({
    getManufacturers: () => dispatch(getManufacturers()),
    deleteManufacturer: (id) => dispatch(deleteManufacturer(id))
})

ProductManufacturer.propTypes = {
    manufacturers: PropTypes.array,
    getManufacturers: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManufacturer)