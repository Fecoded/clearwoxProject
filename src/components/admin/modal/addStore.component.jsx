import { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { createStore, getOutlets } from '../../../redux/retail/retail.action'
import { selectLoading, selectOutlet } from '../../../redux/retail/retail.selector'
import Alert from '../../../redux/retail/retail.utils'

const AddStore = ({ getOutlets, createStore, outlets, loading }) => {
    const [description, setDescription] = useState('')
    const [outletId, setOutletId] = useState('')

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault()
        if(outletId !== ''){
            createStore({
                outletId: +outletId,
                description,
                hideModal,
                setDescription,
                setOutletId
            })
        }else {
            Alert('Please select an outlet from the list')
        }
    }

    useEffect(() => {
        getOutlets()
    },[getOutlets])


    return (
    <div className="modal fade" id="addStoreModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Store Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">

               <div className="form-group">
                <label htmlFor="Outlet">Outlet</label>
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
    outlets: selectOutlet,
    loading: selectLoading
})


export default connect(mapStateToProps, { createStore, getOutlets })(AddStore)