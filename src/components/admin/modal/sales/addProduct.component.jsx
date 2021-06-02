import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'

import {getSaleProduct} from '../../../../redux/sales/sale.action'


const AddProduct = ({ product }) => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [currentquantity, setCurrentQuantity] = useState('')
    const [quantity, setQuantity] = useState(0)

    const hideModal = () => {
        window.$("#addProductModal").modal("hide")
     }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        product.qty = +quantity
        dispatch(getSaleProduct(product))
    }

    useEffect(() => {
        if(product) {
            setDescription(product.description)
            setPrice(product.price)
            setCurrentQuantity(product.quantity)
        }
    },[product])

    return (
    <div className="modal fade" id="addProductModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
             
    
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        readOnly
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}                
                        />
               </div>
             
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        readOnly
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}                
                        />
               </div>
             
                <div className="form-group">
                    <label htmlFor="qty">Current Quantity</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Quantity"
                        readOnly
                        name='currentquantity'
                        value={currentquantity}
                        onChange={(e) => setCurrentQuantity(e.target.value)}
                        />
               </div>

                <div className="form-group">
                    <label htmlFor="qty">No of Quantity</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="No of Quantity"
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value <= currentquantity && e.target.value)}
                        required
                        />
               </div>
             

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={() => hideModal()}>Submit</button>   
           </div>
            </form>
        </div>
    </div> 
)}


export default AddProduct