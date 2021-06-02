import React,  {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getOutletStock} from '../../../../redux/stock/stock.action'
import {selectStockItems, selectStockItemCount} from '../../../../redux/stock/stock.selector'
import {getSuppliers, createInventory} from '../../../../redux/retail/retail.action'
import {selectSupplierItems} from '../../../../redux/retail/retail.selector'

import {currencyFormat } from '../../../js/custom'
import AddPurchaseStock from '../../modal/addPurchaseStock.component'
import moment from 'moment'
import Alert from '../../../../redux/retail/retail.utils'

const PurchaseStockList = ({ stocks, totalCount, setHide, suppliers, stores, createInventory }) => {
    const [amountPayable, setAmountPayable] = useState('')
    const [amountTendered, setAmountTendered] = useState(0)
    const [balance, setBalance] = useState(0)
    const [customerId, setSupplierId] = useState('')
    const [date, setDate] = useState(new Date())
    const [type, setType] = useState(0);
    const [ref] = useState('')

    useEffect(() => {
        if(stocks) {
            setAmountPayable(totalCount)
        }
        getOutletStock()
        getSuppliers()
         // eslint-disable-next-line
    },[getOutletStock, getSuppliers])
    
    const onAmountTendered = (value) => {
        switch(value){
            case 10:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 20:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 50:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 100:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 200:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 500:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 1000:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 2000:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 5000:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 10000:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 20000:
                setAmountTendered(amountTendered + value);
                setBalance(amountPayable - (amountTendered + value))
                break;
            case 'CE':
                setAmountTendered(0);
                break;
            default:
                return value
        }
    }

    const hideModal = () => {}

    const onSubmit = () => {
       if(customerId !== ''){
           createInventory({
               // outletId: +outletId,
               customerId: +customerId,
               storeId: stores[0].id,
               items: stocks,
               payments: [
                   {
                       type: +type,
                       amount: +amountTendered,
                       ref
                   }
               ],
               date,
               setHide
           }) 

       }else {
            Alert("Please select a supplier from the list", "danger")
       }

        // console.log(customerId, type, amountTendered)
    }


    return (
    <Fragment>
        <div className="card card-body app-content-body fixed-layout-2">
            <div className="app-lists">
        <div className="container-fluid">
            <div className="mt-3">
                <div className="d-flex">
                    <div className="back-link cursor-pointer" title="back" onClick={() => setHide(false)}>
                    <span className="iconify" data-icon="bi:arrow-left" data-inline="false"></span>
                    </div>
                    <h6 className="card-title font-size-16 mt-2">Stock Details</h6>

                        {/* <div className="text-right">
                            <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addexpenseModal">
                                <i className="fa fa-plus mr-2"></i> Submit 
                            </button>
                            <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                                <i className="fa fa-refresh mr-2"></i> Refresh
                            </button>
                        </div> */}
                </div>
            </div>

            <div className="card-body">
            <div className="d-flex justify-content-between mb-4">
                <div className="form-group">
                    <label htmlFor="supplier">Suppliers</label>
                        <select 
                            className="form-control"
                            name='customerId'
                            value={customerId || ''}
                            onChange={(e) => setSupplierId(e.target.value)}
                            >
                            <option>Select</option>
                            {suppliers.map(supplier => (
                            <option key={supplier.id}  value={supplier.id}>{supplier.fullName}</option>
                            ))}
                        </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name='date'
                        value={moment(date).format('YYYY-MM-DD')}
                        onChange={(e) => setDate(e.target.value)}
                        />
                </div>
            </div>
            

            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <tbody>
                        <tr className="cursor-pointer">
                            <td className="width-10 pr-0 py-3">
                                 <i className="fa fa-plus-circle"></i>
                            </td>
                                  <td className="">No of Products</td>
                                    <td className="text-right">{stocks.length}</td></tr></tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Sub-total</td>
                                        <td className="text-right">{currencyFormat(totalCount)}</td>
                                </tr>
                            <tr>
                                <td colSpan="2">Discount</td>
                                <td className="text-right">₦0.00</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Total Payable</td>
                                <td className="text-right font-weight-bold font-size-22">{currencyFormat(totalCount)}</td>
                            </tr>
                            {amountTendered !== 0 && 
                                <tr>
                                    <td colSpan="2">Cash Payment</td>
                                    <td className="text-right font-weight-bold">{currencyFormat(amountTendered)}</td>
                                </tr>
                            }
                            </tfoot>
                            </table>
                        </div>

                        <hr />
                            If you have made payment use any of the buttons below.
                        <hr />
                        <div>
                        <button type="button" className="btn btn-outline-primary mr-2 mb-2" onClick={() => setType(0)} data-toggle="modal" data-target="#CashModal">
                            <i className="ti-plus mr-2"></i> Cash Payment
                        </button>

                        <button type="button" className="btn btn-outline-primary mr-2 mb-2" onClick={() => setType(1)}>
                            <i className="ti-plus mr-2"></i> Bank Payment
                        </button>

                    <div className="modal" tabIndex="-1" role="dialog" id="CashModal">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                
                    <form onSubmit={(e) => e.preventDefault()}>
                
                    <div className="modal-header"><h5 className="modal-title">Cash Dialog</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>

                    <div className="modal-body"><div className="row">
                        <div className="col-sm-5">
                            <div className="form-group">
                                <label htmlFor="Payable">Amount Payable</label>
                                <input 
                                    placeholder="Amount payable" 
                                    readOnly 
                                    required 
                                    type="number" 
                                    className="form-control valid"
                                    value={amountPayable}
                                    onChange={(e) => setAmountPayable(e.target.value)}
                                    />    
                                    </div>

                            <div className="form-group">
                                <label htmlFor="Tendered">Amount Tendered</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Amount tendered" 
                                    required=""
                                    value={amountTendered}
                                    onChange={(e) => setAmountTendered(e.target.value)}
                                    />
                                    </div>

                            <div className="form-group">
                                <label htmlFor="Balance">Balance</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Balance" 
                                    readOnly 
                                    required
                                    value={balance}
                                    // onChange={() => setBalance()}
                                    />
                            </div>
                    </div>

                        <div className="col-sm-7"><div className="cash-buttons mt-4">
                            <div className="mb-1">
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(10)}>10</button>
                                <button type="button" className="btn btn-info btn-modal"onClick={() => onAmountTendered(20)}>20</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(50)}>50</button>
                            </div>
                            <div className="mb-1">
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(100)}>100</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(200)}>200</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(500)}>500</button>
                            </div>
                            <div className="mb-1">
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(1000)}>1,000</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(2000)}>2,000</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(5000)}>5,000</button>
                            </div>
                            <div className="mb-1">
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(10000)}>10,000</button>
                                <button type="button" className="btn btn-info btn-modal" onClick={() => onAmountTendered(20000)}>20,000</button>
                                <button type="button" className="btn btn-info btn-modal"onClick={() => onAmountTendered('CE')}>CE</button>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={() => 
                                 hideModal(window.$("#CashModal").modal("hide"))}>Save changes</button>
                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                        {stocks.length > 0  && 
                        <div className="text-muted mt-3">
                            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                        </div>                              
                        
                        }
            </div>
           

        </div>
        </div>
        </div>
        <AddPurchaseStock />
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    stocks: selectStockItems,
    totalCount: selectStockItemCount,
    suppliers: selectSupplierItems
})

export default connect(mapStateToProps, {getOutletStock, getSuppliers, createInventory})(PurchaseStockList)
