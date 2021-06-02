import React, { useEffect, useState, Fragment } from 'react'
import { connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectStore, selectLoading } from '../../../redux/retail/retail.selector';
import { getStores, getStoreProductId } from '../../../redux/retail/retail.action';
import Alert from '../../../redux/retail/retail.utils';


const ChangeStore = ({ stores, getStores, getStoreProductId, loading }) => {
    const [storeId, setStoreId] = useState('');

    useEffect(() => {
        getStores()
    }, [getStores])

    const hideModal = () => {}

    const onSubmit = e => {
        e.preventDefault()
        if(storeId === '' || storeId === 'Select'){
            Alert('No Store was selected')
        }else {
            getStoreProductId(storeId, hideModal)
        }
    }

    return (
        <div className="modal fade" id="changeStoreModal" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Select Store</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="Store">Store</label>
                        <select 
                            className="custom-select" 
                            name='storeId' 
                            value={storeId} 
                            onChange={(e) => setStoreId(e.target.value)}
                            >
                            <option>Select</option>
                            {stores.map(store => (
                                <option key={store.id} value={store.id}>{store.description}</option>
                            ))}
                        </select>
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
    )
}

const mapStateToProps = createStructuredSelector({
    stores: selectStore,
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    getStores: () => dispatch(getStores()),
    getStoreProductId: (id, hideModal) => dispatch(getStoreProductId(id, hideModal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeStore)