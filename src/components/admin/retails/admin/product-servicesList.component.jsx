import { Fragment } from 'react'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { setCurrent, deleteProduct, deleteService } from '../../../../redux/retail/retail.action'


const ProductServicesList = ({ item, items, setCurrent, deleteProduct, deleteService }) => {

    const onDeleteProduct = () => {}
    const onDeleteService = () => {}

    return(
        <Fragment>
            {items.length > 0 && (

                <tr className="cursor-pointer">
                <td className="pl-2">{item.code}</td>
                <td className="pl-5">{item.description}</td>
                <td className="pl-5">{item.manufacturer ? 'Product': 'Service'}</td>
                <td className="pl-5">{item.price}</td>
                <td className="pl-5">{item.category}</td>
                <td className="text-right">
        
                        <button className="btn btn-sm btn-default ml-1">
                            <i className="fa fa-eye"></i>
                        </button>
                        <button
                        className="btn btn-sm btn-default ml-1" 
                        onClick={() => setCurrent(item)}
                        data-toggle="modal" 
                        data-target="#editproductModal"
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        {item.manufacturer ? 
                        (
                        <Fragment>
                            
                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDeleteProduct(
                                    swal({
                                        title: "Delete Product",
                                        text: `Are you sure you want to delete ${item.description}`,
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                    }).then((confirm) => {
                                        if (confirm) {
                                        deleteProduct(item.id)
                                        } 
                                })
                                )}>
                                    <i className="fa fa-trash"></i>
                                </button>
                        </Fragment>
                        ) 
                        :
                        (
                        <Fragment>
                            
                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDeleteService(
                                    swal({
                                        title: "Delete Service",
                                        text: `Are you sure you want to delete ${item.description}`,
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                    }).then((confirm) => {
                                        if (confirm) {
                                        deleteService(item.id)
                                        } 
                                })
                                )}>
                                    <i className="fa fa-trash"></i>
                                </button>
                        </Fragment>  
                        )    
                    }
                 
                </td>
            </tr>
            )}
        </Fragment>
    )
}


export default connect(null, { setCurrent, deleteProduct, deleteService })(ProductServicesList)