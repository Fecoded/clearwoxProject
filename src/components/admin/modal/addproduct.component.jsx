import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { getCategories, getManufacturers, createProduct } from '../../../redux/retail/retail.action'
import { selectCategoryItems, selectManufacturerItems, selectLoading } from '../../../redux/retail/retail.selector'
import Alert from '../../../redux/retail/retail.utils'

const AddProduct = ({ 
            getCategories, 
            getManufacturers, 
            categories, 
            manufacturers, 
            createProduct, 
            loading
     }) => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
    const [code, setCode] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [generic, setGeneric] = useState('')
    const [manufacturerId, setManufacturerId] = useState('')
    const [reorderQty, setReorderQty] = useState('')
    const [orderQty, setOrderQty] = useState('')
    const [allowFractions, setAllowFractions] = useState(true)


useEffect(() => {
    getCategories();
    getManufacturers();

        if(!loading){
            setGeneric('')
            setCode('')
            setCost('')
            setDescription('')
            setOrderQty('')
            setReorderQty('')
            setPrice('')
            setManufacturerId('')
            setCategoryId('')
        }    
},[getManufacturers, getCategories, loading])

const hideModal = () => {}
const clearModal = () => {}

const onSubmit = e => {
    e.preventDefault()
    if(categoryId !== '' && manufacturerId !== '') {
        createProduct({
            description,
            code,
            price: +price,
            cost: +cost,
            categoryId: +categoryId,
            generic,
            manufacturerId: +manufacturerId,
            reorderQty: +reorderQty,
            orderQty: +orderQty,
            allowFractions,
            hideModal,
            clearModal
        }) 
        }
        else 
        {
            if(categoryId === ''){
                Alert('Please select a category from the list') 
            }
                else if (manufacturerId === '') {
                Alert('Please select a manfacturer from the list') 
            }

        }
    }


const onGenerate = () => {
    const randomCode = new Date().valueOf();
    setCode(randomCode)
}

    return (
    <div className="modal fade" id="addproductModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" id="addproductForm" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Product Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                    <div className="form-row">
                        <div className="form-group col-7">
                        <label htmlFor="code">Code</label>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Code"
                                name='code'
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                                />

                              <div className="input-group-prepend">
                                <span className="btn input-group-text cursor-pointer" onClick={onGenerate} id="validationTooltipUsernamePrepend">Generate</span>
                            </div>
                        </div>
                        </div>
                        <div className="form-group col">
                        <label htmlFor="commonname">Common Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Generic"
                                name='generic'
                                value={generic}
                                onChange={(e) => setGeneric(e.target.value)}
                                required
                                />
                        </div>
                    </div>     

            
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Description"
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        />
               </div>
               <div className="form-row">
                    <div className="form-group col">
                    <label htmlFor="category">Category</label>
                            <select 
                                className="form-control"
                                name='categoryId'
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                >
                                <option>Select</option>
                             {categories.map(category => (
                                <option key={category.id}  value={category.id}>{category.description}</option>
                                ))}
                            </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="manufacturer">Manufacturer</label>
                            <select 
                                className="form-control"
                                name='manufacturerId'
                                value={manufacturerId}
                                onChange={(e) => setManufacturerId(e.target.value)}
                                >
                                <option>Select</option>
                            {manufacturers.map(manufacturer => (
                                <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.description}</option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="Cost">Cost</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='cost'
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="reorder quantity">Reorder Quantity</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='reorderQty'
                            value={reorderQty}
                            onChange={(e) => setReorderQty(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="order quantity">Order Quantity</label>
                        <input 
                            type="number" 
                            className="form-control"
                            name='orderQty'
                            value={orderQty}
                            onChange={(e) => setOrderQty(e.target.value)}
                            required
                            />
                    </div>
                </div>
                <div className="custom-control custom-switch custom-control-inline">
                    <input 
                        type="checkbox" 
                        className="custom-control-input" 
                        id="customSwitchInline2" 
                        name='allowFractions'
                        value={allowFractions}
                        onChange={() => setAllowFractions(!allowFractions)}
                        checked={allowFractions}
                        />
                    <label className="custom-control-label" htmlFor="customSwitchInline2">Allow Fractions</label>
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
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    getManufacturers: () => dispatch(getManufacturers()),
    createProduct: (formData) => dispatch(createProduct(formData))
});

AddProduct.propTypes = {
    categories: PropTypes.array,
    manufacturers: PropTypes.array,
    getCategories: PropTypes.func,
    getManufacturers: PropTypes.func,
    createProduct: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)