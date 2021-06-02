import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { getCategories, getManufacturers, updateProduct, updateService } from '../../../redux/retail/retail.action'
import { 
        selectCategoryItems, 
        selectManufacturerItems, 
        selectCurrentItems, 
        selectLoading
     } from '../../../redux/retail/retail.selector'

const EditProduct = ({ 
        getCategories, 
        getManufacturers, 
        categories, 
        manufacturers, 
        current, 
        updateProduct, 
        updateService,
        loading
     }) => {

    const [code, setCode] = useState('')
    const [categoryId, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [generic, setGeneric] = useState('')
    const [manufacturerId, setManufacturer] = useState('')
    const [cost, setCost] = useState('')
    const [price, setPrice] = useState('')
    const [reorderQty, setReorderQuantity] = useState('')
    const [orderQty, setOrderQuantity] = useState('')
    const [allowFractions, setAllowFractions] = useState(false)

useEffect(() => {
    if(current){
        setCode(current.code);
        setCategory(current.categoryId)
        setDescription(current.description);
        setManufacturer(current.manufacturerId)
        setGeneric(current.generic);
        setCost(current.cost);
        setPrice(current.price);
        setReorderQuantity(current.reorderQty)
        setOrderQuantity(current.orderQty)
        setAllowFractions(current.allowFractions)
    }
    getCategories();
    getManufacturers();  
},[getManufacturers, getCategories, current])

const hideModal = () => {}

const onSubmit = (e) => {
    e.preventDefault();
    if(current !== null && current.manufacturer) {
         updateProduct({
            id: current.id,
            description,
            generic,
            categoryId: +categoryId,
            manufacturerId: +manufacturerId,
            cost: +cost,
            price: +price,
            reorderQty: +reorderQty,
            orderQty: +orderQty,
            allowFractions,
            hideModal
        })
        
    }else {
        updateService({
            id: current.id,
            description,
            generic,
            categoryId: +categoryId,
            cost: +cost,
            price: +price,
            hideModal
        })
        
    }
}

return (
    <div className="modal fade" id="editproductModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{current !== null && current.manufacturer ? 'Product Dialog' : 'Service Dialog'}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="Code">Code</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Code"
                            name="code"
                            value={code || ''}
                            onChange={(e) => setCode(e.target.value)}
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="category">Category</label>
                            <select 
                                className="form-control"
                                name='categoryId'
                                value={categoryId || ''}
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                <option>Select</option>
                             {categories.map(category => (
                                <option key={category.id}  value={category.id}>{category.description}</option>
                                ))}
                            </select>

                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        name='description'
                        value={description || ''}
                        onChange={(e) => setDescription(e.target.value)}
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="commonname">Common Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Generic"
                            name='generic'
                            value={generic || ''}
                            onChange={(e) => setGeneric(e.target.value)}
                            />
                    </div>
                  {current !== null && current.manufacturer && 
                        <div className="form-group col">
                            <label htmlFor="manufacturer">Manufacturer</label>
                                <select  
                                    className="form-control"
                                    name='manufacturerId'
                                    value={manufacturerId || ''}
                                    onChange={(e) => setManufacturer(e.target.value)}
                                    >
                                         <option>Select</option>
                                {manufacturers.map(manufacturer => (
                                    <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.description}</option>
                                    ))}
                                </select>
                        </div>
                  
                  }

                
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="Cost">Cost</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='cost'
                            value={cost || ''}
                            onChange={(e) => setCost(e.target.value)}
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='price'
                            value={price || ''}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                    </div>
                </div>
            {current !== null && current.manufacturer && 
            
                    <Fragment>
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="reorder quantity">Reorder Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name='reorderQty'
                                    value={reorderQty || ''}
                                    onChange={(e) => setReorderQuantity(e.target.value)}
                                    />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="order quantity">Order Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name='orderQty'
                                    value={orderQty || ''}
                                    onChange={(e) => setOrderQuantity(e.target.value)}
                                    />
                            </div>
                        </div>

                        <div className="custom-control custom-switch custom-control-inline">
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input" 
                                    id="customSwitchInline3" 
                                    name='allowFractions'
                                    value={allowFractions}
                                    onChange={() => setAllowFractions(!allowFractions)}
                                    checked={allowFractions}
                                    />
                            <label className="custom-control-label" htmlFor="customSwitchInline3">Allow Fractions</label>
                    </div>

                    </Fragment>
                    
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
    categories: selectCategoryItems,
    manufacturers: selectManufacturerItems,
    current: selectCurrentItems, 
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    getManufacturers: () => dispatch(getManufacturers()),
    updateProduct: (formData) =>  dispatch(updateProduct(formData)),
    updateService: (formData) =>  dispatch(updateService(formData))
});

EditProduct.propTypes = {
    categories: PropTypes.array,
    manufacturers: PropTypes.array,
    getCategories: PropTypes.func,
    getManufacturers: PropTypes.func,
    updateProduct: PropTypes.func,
    updateService: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)