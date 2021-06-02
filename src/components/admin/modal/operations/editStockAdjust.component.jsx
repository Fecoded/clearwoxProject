import { useState,Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { createStockAdjust,getStores, getStockAdjust } from '../../../../redux/retail/retail.action'
import { selectLoading, selectStore, selectStockAdjust } from '../../../../redux/retail/retail.selector'
import Alert from '../../../../redux/retail/retail.utils'

const EditStockAdjust = ({ createStockAdjust, loading, getStores, getStockAdjust, stores, types, inventory }) => {
    const [storeId, setStoreId] = useState('')
    const [typeId, setTypeId] = useState('')
    const [adjustBy, setAdjustBy] = useState('')
    const [remarks, setRemark] = useState('')
    const [currentQty, setCurrentQty] = useState('')

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault()
        if(storeId !== '' && typeId !== ''){
            createStockAdjust({
                storeId: +storeId,
                typeId: +typeId,
                items: [
                    {
                        productId: inventory.id,
                        adjustBy: +adjustBy,
                    }
                ],
                remarks,
                hideModal,
                setAdjustBy,
                setRemark
            })
            } else {
                if(storeId === ''){
                    Alert('Please select a store from the list')
                } else if(typeId === ''){
                    Alert('Please select an adjustment type from the list')
                }
            }
        }
    

    useEffect(() => {
     if(inventory){
        setCurrentQty(inventory.quantity)
     }
       getStockAdjust()
       getStores()
    }, [getStores, getStockAdjust, inventory])


    return (
    <div className="modal fade" id="addadjustmentTypeModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Stock Dialog</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
             
            <div className="form-group">
                    <label htmlFor="store">Store</label>
                            <select 
                                className="form-control"
                                name='storeId'
                                value={storeId}
                                onChange={(e) => setStoreId(e.target.value)}
                                >
                                <option>Select</option>
                             {stores.map(store => (
                                <option key={store.id}  value={store.id}>{store.description}</option>
                                ))}
                            </select>
                    </div>

            <div className="form-group">
                    <label htmlFor="Type">Type</label>
                            <select 
                                className="form-control"
                                name='typeId'
                                value={typeId}
                                onChange={(e) => setTypeId(e.target.value)}
                                >
                             <option>Select</option>
                             {types.map(type => (
                                <option key={type.id}  value={type.id}>{type.description}</option>
                                ))}
                            </select>
                    </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="adjustBy">Adjust By</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Adjust By"
                        name='adjustBy'
                        value={adjustBy}
                        onChange={(e) => setAdjustBy(e.target.value)}
                        required
                        />
               </div>
                <div className="form-group col">
                    <label htmlFor="current">Current Quantity</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Current Qty"
                        name='currentQty'
                        value={currentQty}
                        onChange={(e) => setCurrentQty(e.target.value)}
                        disabled
                        />
               </div>

            </div>

                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Remarks"
                        name='remarks'
                        value={remarks}
                        onChange={(e) => setRemark(e.target.value)}
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
    loading: selectLoading,
    stores: selectStore,
    types: selectStockAdjust
})


export default connect(mapStateToProps, { createStockAdjust,getStockAdjust, getStores })(EditStockAdjust)