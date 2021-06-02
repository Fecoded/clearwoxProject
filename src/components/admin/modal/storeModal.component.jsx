import { Fragment, useEffect, useState } from 'react'
import { connect} from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { toggleModalHidden } from '../../../redux/modal/modal.action'
import { selectToggleHidden } from '../../../redux/modal/modal.selector'
import { selectStore } from '../../../redux/retail/retail.selector'
import { getStores, getStoreProductId } from '../../../redux/retail/retail.action'
import SelectStore from '../modal/selectStore.component'
import Alert from '../../../redux/retail/retail.utils'

const StoreModal = ({ toggleModalHidden, hidden, stores, getStores, getStoreProductId }) => {
    const [storeId, setStoreId] = useState('')

    useEffect(() => {
        getStores()
    }, [getStores])

    const onSubmit = e => {
        e.preventDefault()
        if(storeId !== ''){
            toggleModalHidden()
            getStoreProductId(storeId)
        }else {
            Alert('No Store was selected')
        }
    }

    return (
        <Fragment>
            {hidden ? null : 
            <SelectStore>
             <form className="modal-content" onSubmit={onSubmit}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Select Store</h5>
                    <button type="button" className="close" onClick={toggleModalHidden}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                    <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="Store">Store</label>
                                <select 
                                    className="form-control" 
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
              
            </SelectStore>
            
            }

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectToggleHidden,
    stores: selectStore
});

const mapDispatchToProps = dispatch => ({
    getStores: () => dispatch(getStores()),
    toggleModalHidden: () => dispatch(toggleModalHidden()),
    getStoreProductId: (id) => dispatch(getStoreProductId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreModal)