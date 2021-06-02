import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import AddStore from '../../modal/addStore.component';
import EditStore from '../../modal/editStore.component';

import { getStores, deleteStore } from '../../../../redux/retail/retail.action'
import { selectStore } from '../../../../redux/retail/retail.selector'

const StoreList = ({ getStores, stores, deleteStore }) => {
    const [store, setStore] = useState('')

    useEffect(() => {
        getStores()
    }, [getStores])

    const onDelete = () => {};

    const onRefresh = () => getStores();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Stores</h6>
                <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addStoreModal">
                            <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                </div>
            </div>
        </div>

            <div className="card-body">
             {stores.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Outlet</th>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {stores.map(store => (
                                        <tbody key={store.id}>
                                            <tr className="cursor-pointer">
                                        <td>{store.code}</td>
                                        <td>{store.outlet}</td>
                                        <td>{store.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editStoreModal" onClick={() => setStore(store)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                           
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Stores",
                                                            text: `Are you sure you want to delete ${store.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                              deleteStore(store.id)
                                                            } 
                                                    })
                                                )}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                        </td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
                
            ) : (
                <div className="d-flex justify-content-center mb-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            )}
            </div>


            </div>
    </div>
    <AddStore />  
    <EditStore store={store} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    stores: selectStore,
})

const mapDispatchToProps = dispatch => ({
    getStores: () => dispatch(getStores()),
    deleteStore: (code) => dispatch(deleteStore(code))
})

StoreList.propTypes = {
    stores: PropTypes.array,
    getStores: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreList)