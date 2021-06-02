import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import PropTypes from 'prop-types'

import EditStockAdjust from '../../modal/operations/editStockAdjust.component';

import { getInventory } from '../../../../redux/retail/retail.action'
import { selectInventory } from '../../../../redux/retail/retail.selector'

const AdjustStock = ({ getInventory, inventories }) => {
    const [inventory, setInventory] = useState('')

    useEffect(() => {
        getInventory()
    }, [getInventory])

    const onRefresh = () => getInventory();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Stocks</h6>

                    <div className="text-right">
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>

            <div className="card-body">
            {inventories.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Description</th>
                                        <th>Cost</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {inventories.map(inventory => (
                                        <tbody key={inventory.id}>
                                            <tr className="cursor-pointer">
                                        <td>{inventory.code}</td>
                                        <td>{inventory.description}</td>
                                        <td>{inventory.cost}</td>
                                        <td>{inventory.price}</td>
                                        <td>{inventory.quantity}</td>
                                        <td>{inventory.unit}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#addadjustmentTypeModal" onClick={() => setInventory(inventory)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                          
    
                                        </td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
            ) : (
                inventories.length === 0 ? (
                    <div className="d-flex justify-content-center mb-5">
                        No Stock Available
                    </div>
                ) : (
                    <div className="d-flex justify-content-center mb-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
               
            )}
            </div>

            </div>
    </div>
  
    <EditStockAdjust inventory={inventory} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    inventories: selectInventory
})

const mapDispatchToProps = dispatch => ({
    getInventory: () => dispatch(getInventory()),
})

AdjustStock.propTypes = {
    inventories: PropTypes.array,
    getInventory: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustStock)