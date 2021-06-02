import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentItems, selectStore, selectOutlet, selectSupplierItems } from '../../../redux/retail/retail.selector'
import { createInventory, getStores, getOutlets, getSuppliers } from '../../../redux/retail/retail.action'
import { getOutletStock } from '../../../redux/stock/stock.action'
import { selectStockItemCount, selectStockItems } from '../../../redux/stock/stock.selector'

const AddPurchaseStock = 
({ 
    createInventory,
    getStores, 
    stores, 
    outlets,
    getOutlets,
    suppliers,
    getSuppliers,
    priceCount,
    stocks,
    type,
    amount
}) => {

    // const [storeId, setStoreId] = useState('')
    // const [outletId, setOutletId] = useState('')
    const [customerId, setSupplierId] = useState('')
    // const [price, setPrice] = useState('')
    // const [amount, setAmount] = useState('')
    const [ref] = useState('')
    const [date, setDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        createInventory({
            // outletId: +outletId,
            customerId: +customerId,
            storeId: stores[0].id,
            items: stocks,
            payments: [
                {
                    type: +type,
                    amount: +amount,
                    ref
                }
            ],
            date
        }) 

        console.log(customerId, type, amount)
    }

    useEffect(() => {
        // if(priceCount) setPrice(priceCount)

        getSuppliers()
        getStores()
        getOutlets()
    },[getStores, getOutlets, getSuppliers])

    const hideModal = () => {}

    return (
        <Fragment>
            {stocks.length > 0 && (

        <div className="modal fade" id="addpurchaseModal" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form className="modal-content" onSubmit={onSubmit}>
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Post Stock</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                {/* <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="outlet">Outlet</label>
                            <select 
                                className="form-control"
                                name='outletId'
                                value={outletId || ''}
                                onChange={(e) => setOutletId(e.target.value)}
                                >
                                <option>Select</option>
                                {outlets.map(outlet => (
                                <option key={outlet.id}  value={outlet.id}>{outlet.description}</option>
                                ))}
                            </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="store">Store</label>
                            <select 
                                className="form-control"
                                name='storeId'
                                value={storeId || ''}
                                onChange={(e) => setStoreId(e.target.value)}
                                >
                                <option>Select</option>
                                {stores.map(store => (
                                <option key={store.id}  value={store.id}>{store.description}</option>
                                ))}
                            </select>
                    </div>

                </div> */}
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

                    {/* <div className="form-group">
                        <label htmlFor="product">Product</label>
                            <input 
                                type="text"
                                className="form-control"
                                name='productId'
                                value={productId || ''}
                                onChange={(e) => setProductId(e.target.value)}
                                />
                                
                    </div> */}
                    
                        {/* <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Price"
                                name='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                />
                    </div>
                 */}
                

                    {/* <div className="form-row">
                        <div className="form-group col">
                            <label htmlFor="price">Payment Type</label>
                            <select 
                                className="form-control" 
                                name='type'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                >
                                <option>Select</option>    
                                <option value="0">Cash</option>
                                <option value="1">Bank</option>
                            </select>
                    </div>
                        <div className="form-group col">
                            <label htmlFor="amount">Amount</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Amount"
                                name='amount'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                    </div> */}
                    <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                    {/* {type === "1" && 
                        <div className="form-group">
                            <label htmlFor="ref">Ref</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ref"
                                name="ref"
                                value={ref}
                                onChange={(e) => setRef(e.target.value)}
                                />
                        </div>
                    
                    }
                 */}
                
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={() => 
                    hideModal(window.$("#addpurchaseModal").modal("hide"))}>Submit</button>
                </div>
                </form>
            </div>
        </div> 
            )}

        </Fragment>
)}

const mapStateToProps = createStructuredSelector({
    current: selectCurrentItems,
    stores: selectStore,
    outlets: selectOutlet,
    suppliers: selectSupplierItems,
    priceCount: selectStockItemCount,
    stocks: selectStockItems
})

export default connect(mapStateToProps, { 
    createInventory, 
    getStores, 
    getOutletStock,
    getOutlets,
    getSuppliers,
})(AddPurchaseStock)