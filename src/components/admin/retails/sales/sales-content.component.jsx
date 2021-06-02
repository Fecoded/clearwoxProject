import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {getInventory, filterInventory} from '../../../../redux/retail/retail.action'
import Alert from '../../../../redux/retail/retail.utils'
import {addItem, removeItem, getSaleProduct, clearSale, removeProduct} from '../../../../redux/sales/sale.action'
import {selectSaleTotal} from '../../../../redux/sales/sale.selector'
// import AddProduct from "../../modal/sales/addProduct.component"

import {currencyFormat} from '../../../js/custom'
import swal from 'sweetalert'

const SaleContent = ({ total }) => {
    // const [product, setProduct] = useState(null)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getInventory())
    },[dispatch])

    const {inventories, filtered} = useSelector(state => state.retail)
    const {sales} = useSelector(state => state.sales)

    const onDelete = (sale) => {
        swal({
            title: `Remove ${sale.description}`,
            text: `Are you sure you want to remove ${sale.description}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((confirm) => {
            if (confirm) {
                dispatch(removeProduct(sale.id))
            } 
    })
    }

    const onCheckedOut = () => {
        if(sales.length === 0){
            Alert("Please add some product to cart", 'error')
        }
    }


    return(
        <Fragment>

        <div className="container-fluid">

        <div className="row app-block">

            <div className="card col-md-8 app-sidebar">

                <div className="action-right my-4 w-50">
                <div className="input-group">
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search..." 
                        aria-describedby="button-addon1"
                        onChange={(e) => dispatch(filterInventory(e.target.value))}
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

                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventories.length > 0 ? (
                            filtered !== null ? (
                                filtered.length > 0 ? (
                                  filtered.map(product => (
                                      <tr key={product.id} 
                                        className="cursor-pointer" 
                                        onClick={() => dispatch(getSaleProduct(product))}
                                        >
                                          <td>{product.code}</td>
                                          <td>{product.description}</td>
                                          <td>{product.price}</td>
                                          <td>{product.quantity}</td>
                                          <td>{product.unit}</td>
                                      </tr>
                                  ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center pt-5">Your search did not match any products</td>
                                    </tr>
                                )

                            ) : (
                                inventories.map(product => (
                                    <tr key={product.id} 
                                        className="cursor-pointer" 
                                        onClick={() => dispatch(getSaleProduct(product))}
                                        // data-toggle="modal" data-target="#addProductModal"
                                        >
                                    <td>{product.code}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.unit}</td>
                                 </tr>
                                ))
                            )
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center pt-5">Loading...</td>
                            </tr>
                        )}
                     
                    </tbody>
                </table>

         </div>
            </div>
            <div className="col-md-4 app-content">
                <div className="app-content-overlay"></div>
                <div className="app-action hide">
                    <div className="action-right auto-complete">

                        <div className="input-group ">
                            <input
                                type="text"
                                className="form-control "
                                // onChange={onFilter}
                                placeholder="Search Product..."
                            />
                        </div>

                    </div>          

                </div>
                
                    <div className="card card-body app-content-body fixed-layout-2">
                        <div className="app-lists">
                            <div className="container-fluid mt-4">
                            
                                <div className="row">
                                    <div className="col-md-12">
                                            <div className="d-flex mt-1">
                                                <h6 className="pt-1">No of Items: {inventories.length}</h6>       
                                                <div className="col text-right">
                                                     <button className="btn btn-sm btn-danger" onClick={() => dispatch(clearSale())}>Clear</button>
                                                </div>
                                            </div>
                                            <hr/>
                                            {sales.length > 0 ? (
                                                <table className="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sales.map((sale) => (
                                                            <Fragment key={sale.id}>
                                                                <tr >
                                                                    <td>{sale.description}</td>
                                                                    <td className="text-right cursor-pointer">
                                                                        <i className="fa fa-trash" onClick={() => onDelete(sale)}></i>
                                                                    </td>
                                                                </tr>
                                                        
                                                                <tr>
                                                                    <td className="d-flex pt-0" style={{ border: 'none'}}>
                                                                        <button className="btn btn-sm btn-light mr-1" 
                                                                             onClick={() => dispatch(removeItem(sale))}>&#10094;</button>
                                                                        <button className="btn btn-sm btn-light"
                                                                             onClick={() => dispatch(addItem(sale))}>&#10095;</button>
                                                                        <p className="ml-2 mb-0">{sale.price} x {sale.qty}</p>
                                                                    </td>
                                                                    
                                                                    <td className="text-right pt-0" style={{ border: 'none'}}>
                                                                        {currencyFormat(sale.price*sale.qty)}
                                                                    </td>
                                                                </tr>
                                                                                
                                                            </Fragment>
                                                            
                                                        ))}
                                                    </tbody>
                                                </table>

                                            ) : (
                                                <p className="text-center">No Product has been added</p>  
                                            )}


                                            <hr/>
                                            <div className="d-flex mt-1">
                                                <h6 className="pt-1">Total Sales</h6>       
                                                <div className="col text-right">
                                                     <h5 className="font-weight-bold">{currencyFormat(total)}</h5>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="card-footer text-muted text-right">
                                  <button type="submit" className="btn btn-primary" onClick={() => onCheckedOut()}>Check Out</button>       
                            </div>
                    </div>

              
            </div>
        </div>
        
                                             
    </div>
    
        </Fragment>
    )
}
const mapStateToProps = createStructuredSelector({
    total: selectSaleTotal
})

export default connect(mapStateToProps)(SaleContent)