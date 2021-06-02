import { useEffect, Fragment, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    getproduct, 
    filterProductStore, 
    setCurrent, 
    getStores, 
    getStoreProductId
} from '../../../../redux/retail/retail.action'
import { selectProductItems, selectFilteredItems, selectStore, selectStoreProductItems } from '../../../../redux/retail/retail.selector'
import { removeStock, clearStock } from '../../../../redux/stock/stock.action'
import { selectStockItems, selectStockName } from '../../../../redux/stock/stock.selector'
import { getOutletStock } from '../../../../redux/stock/stock.action'
import { toggleModalHidden } from '../../../../redux/modal/modal.action'

import AddProductToOulet from '../../modal/addProductToOutlet.component'
import SuggestionList from '../admin/suggestionList.component'
import PurchaseStockList from './inventory-purchaseStockList.component'
import AddPurchaseStock from '../../modal/addPurchaseStock.component'
import StoreModal from '../../modal/storeModal.component'
import ChangeStore from '../../modal/changeStore.component'
import PurchaseStockDetails from '../operation/purchaseStockList.component'
import Icon from '../../../assets/cart.png'



const PurchaseStock = ({  
    filtered, 
    filterProductStore, 
    stocks, 
    setCurrent, 
    removeStock, 
    getOutletStock,
    clearStock,
    storeProducts,
    stores,
    getStoreProductId,
    name
 }) => {
    const [suggestion, setSuggestion] = useState(false)
    const [filter, setFilter] = useState('')
    const [hide, setHide] = useState(false)
    const searchContainer  = useRef(null);



    useEffect(() => {
        getOutletStock()
    

        window.addEventListener("mousedown", (e) => {
            if(searchContainer.current && !searchContainer.current.contains(e.target)){
                hideSuggestion()
            }
        });

        let current = searchContainer.current
        // const hasObject = stores.some(function(val){
        //     return typeof val === "object";
        //  });

        if(stores.length > 1 && stocks.length === 0) {
            // toggleModalHidden()
        } else if(stocks.length > 0){
            getStoreProductId(stocks[0].storeId)
        } else if(stores.length === 1){
            getStoreProductId(stores[0].id)
        }      
    
                
        return () => {
            
            window.removeEventListener("mousedown", (e) => {
                if(current && !current.contains(e.target)){
                    hideSuggestion()
                }
            });  

            
        }

    // eslint-disable-next-line
    }, [getOutletStock, stores.length])

    // const storeLength = stores.some((store) => store > 0)
    // console.log(storeLength)

    const onFilter = (e) => {
        filterProductStore(e.target.value)
            setFilter(e.target.value)
            setSuggestion(true)
    }

  
    const hideSuggestion = () => setSuggestion(false)


    return (
        <Fragment>
            {storeProducts.length > 0 || stores.length === 1 || stocks.length > 0 ? (

            <div className="container-fluid">

                <div className="row app-block">

                    <div className="card col-md-4 app-sidebar">

                        <div className="action-right my-4">
                        <div className="input-group">
                            <input 
                                type="search" 
                                className="form-control" 
                                placeholder="Search..." 
                                aria-describedby="button-addon1"
                                onChange={(e) => filterProductStore(e.target.value)}
                            />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-light"
                                type="button" id="button-addon1">
                                 <i className="ti-search"></i>
                            </button>
                        </div>
                        </div>

                        </div>
                        <hr />
                        <div className="fixed-layout">

                            <div className="app-sidebar-menu">

                                <div className="list-group list-group-flush">
                                    {storeProducts.length > 0 ?
                                        filtered !== null ?
                                            filtered.length > 0 ? (
                                                filtered.map(product => (
                                                    <p key={product.productCode}
                                                        onClick={() => setCurrent(product)}
                                                        className="list-group-item d-flex align-items-center cursor-pointer"
                                                        data-toggle="modal" data-target="#addToOutletModal"
                                                    >
                                                        {product.description}
                                                        
                                                    </p>
                                                )) 
                                            ) : (
                                                <div className="d-flex justify-content-center">
                                                    <p>Your search did not match any products</p>
                                                </div>
                                            )
                                          :
                                            storeProducts.map(product => (
                                                <p key={product.productCode}
                                                    onClick={() => setCurrent(product)}
                                                    className="list-group-item d-flex align-items-center cursor-pointer"
                                                    data-toggle="modal" data-target="#addToOutletModal"
                                                >
                                                    {product.description}
                                                </p>
                                                
                                            )) : (
                                            <div className="d-flex justify-content-center">
                                                <p>No Products Selected from Store</p>
                                            </div>
                                        )}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-8 app-content">
                        <div className="app-content-overlay"></div>
                        <div className="app-action hide" ref={searchContainer}>
                            <div className="action-right auto-complete">

                                <div className="input-group ">
                                    <input
                                        type="text"
                                        className="form-control "
                                        onChange={onFilter}
                                        placeholder="Search Product..."
                                    />
                                </div>

                            </div>
                    
                            {suggestion && filter && <SuggestionList filtered={filtered}/>}
                         
                          

                        </div>
                        {/* START */}
                        {!hide ? (
                            <div className="card card-body app-content-body fixed-layout-2">
                                <div className="app-lists">
                                    <div className="container-fluid mt-4">
                                    
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="table-responsive">
                                                    <div className="d-flex mt-2">
                                                        {storeProducts.length > 0 ? (
                                                            <Fragment>
                                                                <h5 className="col">Posting to {storeProducts.length > 0 && storeProducts[0].store}</h5>
                                                                <div className="col text-right">
                                                                {stores.length !== 1 &&
                                                                <button className="btn btn-sm btn-primary" data-toggle="modal" data-target="#changeStoreModal">Change Store</button>
                                                                
                                                                }
                                                            </div>

                                                            </Fragment>
                                                        ) : (    
                                                            <div className="spinner-border" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        )}
                                                    
                                                    </div>
                                                    <hr/>
                                                    {stocks.length > 0 ? (
                                                        <table className="table table-hover mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Description</th>
                                                                    <th>Amount</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {stocks.map(stock => (
                                                                <PurchaseStockList key={stock.id} stock={stock}
                                                                    removeStock={removeStock}
                                                                    clearStock={clearStock}
                                                                    />

                                                                    ))
                                                                    }
                                                            </tbody>
                                                        </table>

                                                    ): (
                                                        <Fragment>
                                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                                <img src={Icon} alt="img" className="w-35" /> 
                                                                <p className="mr-5">No Product has been added</p>
                                                            </div>
                                                        </Fragment>
                                                    )}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            {stocks.length > 0 && 
                                <div className="card-footer text-muted text-right">
                                    {/* <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#addpurchaseModal">Submit</button> */}
                                    <button type="submit" className="btn btn-primary" onClick={() => setHide(true)} >Next: Stock</button>
                                </div>
                            
                            }                                       
                            </div>

                        ): (
                            <PurchaseStockDetails setHide={setHide} stores={stores} />
                        )
                        
                        }
                        {/* END */}
                    </div>
                </div>
                
                                                     
            </div>

            ) : (
                 stores.length === 0 ? (
                    <div className="d-flex justify-content-center mb-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                ) : (
                    <div className="container-fluid">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={Icon} alt="img" className="img-icon"/>
                            <h3 className="text-center mt-2 font-size-17">Your purchase cart is currently empty, click the button below to start a new purchase</h3>
                            <button type="submit" className="btn btn-primary mt-3 mr-5" data-toggle="modal" data-target="#changeStoreModal">Start a new Purchase</button>

                        </div>
                    
                        </div>
                )
            )}
                                                            
            <AddProductToOulet />
            <AddPurchaseStock />
            <StoreModal />
            <ChangeStore />
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    products: selectProductItems,
    filtered: selectFilteredItems,
    stocks: selectStockItems,
    stores: selectStore,
    storeProducts: selectStoreProductItems,
    name: selectStockName
})

export default connect(mapStateToProps, { 
    getproduct, 
    filterProductStore, 
    getOutletStock, 
    setCurrent, 
    removeStock,
    clearStock,
    getStores,
    toggleModalHidden,
    getStoreProductId
})(PurchaseStock)
