import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { getCategories, createService } from '../../../redux/retail/retail.action'
import { selectCategoryItems, selectLoading } from '../../../redux/retail/retail.selector'
import Alert from '../../../redux/retail/retail.utils'

const AddService = ({ getCategories, categories, createService, loading }) => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
    const [code, setCode] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [generic, setGeneric] = useState('')


useEffect(() => {
    getCategories();
    if(!loading){
        setDescription('')
        setPrice('')
        setCost('')
        setCode('')
        setCategoryId('')
        setGeneric('')
        }
},[getCategories, loading])

const hideModal = () => {}

const onSubmit = (e) => {
    e.preventDefault();
    if(categoryId !== '') {
            createService({
                description,
                code,
                price: +price,
                cost: +cost,
                categoryId: +categoryId,
                generic,
                hideModal
            })
        }else {
            if(categoryId === ''){
                Alert('Please select a category from the list') 
            }
        }
}

const onGenerate = () => {
    const randomCode = new Date().valueOf();
    setCode(randomCode)
}

    return (
    <div className="modal fade" id="serviceModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Service Dialog</h5>
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
                                />
                        </div>
                    </div>   
             
               
                    <div className="form-group">
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
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    createService: (formData) => dispatch(createService(formData))
});

AddService.propTypes = {
    categories: PropTypes.array,
    getCategories: PropTypes.func,
    createService: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddService)