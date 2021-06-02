import { connect } from 'react-redux'
import { setCurrent } from '../../../../redux/retail/retail.action'

const SuggestionList = ({ filtered, setCurrent }) => {
    return (
    <ul className="list-group cursor-pointer">
        {filtered !== null && filtered.map(product => (
            <li
             className="list-group-item"
             key={product.id}
             onClick={() => setCurrent(product)}
             data-toggle="modal" data-target="#addToOutletModal"
             >
            {product.description}
            </li>
        ))}
    </ul>
    )
}

export default connect(null, { setCurrent })(SuggestionList)