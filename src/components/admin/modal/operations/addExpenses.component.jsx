import { useState,Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { createExpense, getSuppliers, getExpensesItem } from '../../../../redux/retail/retail.action'
import { selectLoading, selectSupplierItems, selectExpenseItems } from '../../../../redux/retail/retail.selector'

const AddExpenses = ({ createExpense, loading, suppliers, getSuppliers, getExpensesItem, expenseItems }) => {
    const [vendorId, setVendorId] = useState('')
    const [itemId, setItemId] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')
    const [ref, setRef] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    
    useEffect(() => {
        getSuppliers()
        getExpensesItem()
    }, [getSuppliers, getExpensesItem])

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault()
        createExpense({
            vendorId: +vendorId,
            items: [
                {
                    itemId: +itemId,
                    quantity: +quantity,
                    price: +price
                }
            ],
            payments: [
                {
                    type: +type,
                    amount: +amount,
                    ref
                }
            ],
            date,
            hideModal,
            setQuantity,
            setPrice,
            setAmount,
            setRef
        })
    }

    return (
    <div className="modal fade" id="addexpensesModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Expense Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">

            <div className="form-row">
            <div className="form-group col">
                    <label htmlFor="supplier">Supplier</label>
                            <select 
                                className="form-control"
                                name='supplier'
                                value={vendorId}
                                onChange={(e) => setVendorId(e.target.value)}
                                >
                                <option>Select</option>
                             {suppliers.map(supplier => (
                                <option key={supplier.id}  value={supplier.id}>{supplier.fullName}</option>
                                ))}
                            </select>
                    </div>
                        <div className="form-group col">
                            <label htmlFor="item">Expense Items</label>
                                    <select 
                                        className="form-control"
                                        name='item'
                                        value={itemId}
                                        onChange={(e) => setItemId(e.target.value)}
                                        >
                                        <option>Select</option>
                                    {expenseItems.map(expenseItem => (
                                        <option key={expenseItem.id}  value={expenseItem.id}>{expenseItem.description}</option>
                                        ))}
                                    </select>
                        </div>
            </div>

                    <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="price">Price</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Price"
                                        name='price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                        />
                              </div>                
                                <div className="form-group col">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Quantity"
                                        name='quantity'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        required
                                        />
                              </div>                
                    </div>
                    <div className="form-row">
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
                    </div>

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

                    {type === "1" && 
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


            </div>
            <div className="modal-footer">
                    {loading ? (
                        <button type="button" className="btn btn-primary" disabled>
                            <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                Loading...
                      </button>
                    ) : (
                        <Fragment>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Fragment>
                        )}
                    </div>

            </form>
        </div>
    </div> 
)}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    suppliers: selectSupplierItems,
    expenseItems: selectExpenseItems
})

const mapDispatchToProps = dispatch => ({
    createExpense: (formData) => dispatch(createExpense(formData)),
    getSuppliers: () => dispatch(getSuppliers()),
    getExpensesItem: () => dispatch(getExpensesItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses)