import { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useState } from 'react'
import { selectCurrentItems, selectStore, selectLoading } from '../../../redux/retail/retail.selector'
import { getStores } from '../../../redux/retail/retail.action'
import { createOutletStock, getStoreProduct } from '../../../redux/stock/stock.action'
import { v4 as uuid } from 'uuid'
import Alert from '../../../redux/retail/retail.utils'


const AddProductToOutlet = 
({ 
    current, 
    createOutletStock,
    getStores, 
    stores, 
    getStoreProduct,
    loading
}) => {

    const [costprice, setCostprice] = useState('')
    const [sellingprice, setSellingprice] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [currentquantity, setCurrentQuantity] = useState('')
    const [total, setTotal] = useState('')

    const hideModal = () => {
       window.$("#addToOutletModal").modal("hide")
    }

    const id = uuid
  
    const onSubmit = (e) => {
        e.preventDefault()
        if(quantity !== ''){
            createOutletStock({
                storeId: +current.storeId,
                productId: +current.productId,
                price: +price,
                quantity: +quantity,
                setQuantity   
              })
        hideModal()
        current.gross = total
        current.id = id
        getStoreProduct(current)

        }else {
            Alert('Please enter quantity')
        }
      
    }
    
    useEffect(() => {
        if(current){ 
            setCostprice(current.price)
            setSellingprice(current.cost)
            setPrice(current.price)
            setCurrentQuantity(current.quantity)
            setTotal(current.quantity * current.price)
        }
        getStores()               
    
    },[getStores, current])




    return (
    <div className="modal fade" id="addToOutletModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{current !== null && current.description}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
               
                {/* <div className="form-group hide">
                    <label htmlFor="store">Store</label>
                        <select 
                            className="form-control"
                            name='storeId'
                            value={storeId || ''}
                            onChange={(e) => setStoreId(e.target.value)}
                            >
                            <option value={objStore.id}>Select</option>
                        </select>
                </div> */}
                <div className='form-row'>
                    <div className="form-group col">
                        <label htmlFor="costprice">Current Cost Price</label>
                            <input 
                                type="text"
                                className="form-control"
                                name='costprice'
                                value={costprice || ''}
                                onChange={(e) => setCostprice(e.target.value)}
                                disabled
                                />       
                    </div>
                    <div className="form-group col">
                        <label htmlFor="sellingprice">Current Selling Price</label>
                            <input 
                                type="text"
                                className="form-control"
                                name='sellingprice'
                                value={sellingprice || ''}
                                onChange={(e) => setSellingprice(e.target.value)}
                                disabled
                                />       
                    </div>

                </div>
                <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Quantity"
                        name='quantity'
                        value={quantity || 0}
                        onChange={(e) => setQuantity(e.target.value)}
                        />
                     </div>
                <div className="form-group col">
                    <label htmlFor="currentquantity">Current Quantity</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Current Quantity"
                        name='currentquantity'
                        value={currentquantity || ''}
                        onChange={(e) => setCurrentQuantity(e.target.value)}
                        disabled
                        />
                     </div>

                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Price"
                            name='price'
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) 
                                e.target.value &&  setTotal(quantity * e.target.value)
                             }}
                            />
                </div>
                    <div className="form-group col">
                    <label htmlFor="total cost">Total Cost</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Total Cost"
                        name='total'
                        value={total || ''}
                        onChange={(e) =>{ setTotal(e.target.value)
                            e.target.value && setPrice((e.target.value / quantity).toFixed(2))
                        }}
                        />
                     </div>
                </div>
             
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
                            <button type="submit" className="btn btn-primary" onClick={hideModal}>Submit</button>
                        </Fragment>
                        )}
                    </div>
            </form>
        </div>
    </div> 
)}

const mapStateToProps = createStructuredSelector({
    current: selectCurrentItems,
    stores: selectStore,
    loading: selectLoading
})

export default connect(mapStateToProps, { 
    createOutletStock, 
    getStores, 
    getStoreProduct
})(AddProductToOutlet)