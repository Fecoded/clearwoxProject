import swal from 'sweetalert'
import {currencyFormat} from '../../../js/custom'


const PurchaseStockList = ({ stock, removeStock  }) => {
    const onDelete = () => {}
    
    return(
        <tr className="cursor-pointer">
        <td>{stock.description}</td>
        <td>{currencyFormat(stock.gross)}</td>
        <td className="text-right">
        <div className="btn btn-sm btn-default ml-1">
            
            {/* <div className="dropdown-divider"></div>  */}
            <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                    swal({
                        title: "Remove Stock",
                        text: `Are you sure you want to remove ${stock.description}`,
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    }).then((confirm) => {
                        if (confirm) {
                           removeStock(stock.id)
                        } 
                })
            )}>
                 <i className="fa fa-trash"></i>
            </button>
        </div>
    </td>
    </tr>
    

        
 
)}

export default PurchaseStockList