import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

// import Spinner from '../../../spinner/spinner.component'
import AddStockAdjust from '../../modal/addStockAdjust.component';
import EditStockAdjust from '../../modal/editStockAdjust.component';

import { getStockAdjust, deleteStockAdjust } from '../../../../redux/retail/retail.action'
import { selectStockAdjust } from '../../../../redux/retail/retail.selector'

const AdjustStock = ({ getStockAdjust, deleteStockAdjust, stockAdjusts }) => {
    const [stockAdjust, setStockAdjust] = useState('')

    useEffect(() => {
        getStockAdjust()
    }, [getStockAdjust])

    const onDelete = () => {};

    const onRefresh = () => getStockAdjust();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Adjust Type</h6>

                    <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addstockAdjustsModal">
                             <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>

            <div className="card-body">
            {stockAdjusts.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {stockAdjusts.map(stockAdjust => (
                                        <tbody key={stockAdjust.id}>
                                            <tr className="cursor-pointer">
                                        <td>{stockAdjust.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editstockAdjustsModal" onClick={() => setStockAdjust(stockAdjust)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                          
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Stock",
                                                            text: `Are you sure you want to delete ${stockAdjust.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                                deleteStockAdjust(stockAdjust.id)
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
    <AddStockAdjust />  
    <EditStockAdjust stockAdjust={stockAdjust} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    stockAdjusts: selectStockAdjust
})

const mapDispatchToProps = dispatch => ({
    getStockAdjust: () => dispatch(getStockAdjust()),
    deleteStockAdjust: (id) => dispatch(deleteStockAdjust(id))
})

AdjustStock.propTypes = {
    stockAdjusts: PropTypes.array,
    getStockAdjust: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustStock)