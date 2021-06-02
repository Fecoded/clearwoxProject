import { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { getproduct, getservice } from '../../../../redux/retail/retail.action'
import { selectProductItems, selectServiceItems } from '../../../../redux/retail/retail.selector'

import AddProduct from '../../modal/addproduct.component'
import AddService from '../../modal/addservice.component'
import EditProduct from '../../modal/editproduct.component'
import ProductServicesList from './product-servicesList.component'


const ProductAndService = ({ getproduct, getservice, products, services }) => {

useEffect(() => {
    getproduct()
    getservice()
},[getproduct, getservice]);

const items = [...products, ...services];

const onRefresh = () => getproduct()

return (
<Fragment>
        <div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-18">Product & Services</h6>
                <div className="text-right display-hide">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addproductModal">
                            <i className="fa fa-plus mr-2"></i> Add Product
                        </button>
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#serviceModal">
                            <i className="fa fa-plus mr-2"></i> Add Service
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                
                </div>

                <div className="text-right hide">
                <div className="btn-dropdown">
                    <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                    <div className="m-2 cursor-pointer" data-toggle="modal" data-target="#addproductModal">
                            <i className="fa fa-plus mr-2"></i> Add Product
                        </div>
                        <div className="m-2 cursor-pointer" data-toggle="modal" data-target="#serviceModal">
                            <i className="fa fa-plus mr-2"></i> Add Service
                        </div>
                        <div className="m-2 cursor-pointer" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
        
        </div>
            <div className="card-body">
        {items.length > 0 ? (
                    <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left pl-2">Code</th>
                                        <th className="pl-5">Description</th>
                                        <th className="pl-5">Type</th>
                                        <th className="pl-5">Price</th>
                                        <th className="pl-5">Category</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <ProductServicesList key={item.id} item={item} items={items} />
                                     ))}
                                </tbody>
                         
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

    <AddProduct />
    <AddService />
    <EditProduct />

</Fragment>
)};

const mapStateToProps = createStructuredSelector({
    products: selectProductItems,
    services: selectServiceItems
})

const mapDispatchToProps = dispatch => ({
    getproduct: () => dispatch(getproduct()),
    getservice: () => dispatch(getservice()),
})

ProductAndService.propTypes = {
    getproduct: PropTypes.func,
    getservice: PropTypes.func,
    products: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAndService);