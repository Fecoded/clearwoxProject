import { Fragment, useEffect} from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import AddExpenses from '../../modal/operations/addExpenses.component';

import { getExpenses } from '../../../../redux/retail/retail.action'
import { selectExpenses } from '../../../../redux/retail/retail.selector'

const AdjustStock = ({ getExpenses, expenses }) => {

    useEffect(() => {
        getExpenses()
    }, [getExpenses])

    // const onDelete = () => {};

    const onRefresh = () => getExpenses();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Expenses</h6>

                    <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addexpensesModal">
                             <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>

            <div className="card-body">
            {expenses.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {expenses.map(expense => (
                                        <tbody key={expense.id}>
                                        {expense.items.map(item => (
                                            <tr key={item.id} className="cursor-pointer">
                                                <td>{item.description}</td>               
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.gross}</td>
                                            </tr>
                                        ))}
                                      
                                </tbody>
                                ))}
                            </table>
                        </div>
            ) : (
                    <div className="d-flex justify-content-center mb-5">
                        No Expenses Available
                    </div>
            )}
            </div>

            </div>
    </div>
    <AddExpenses />  
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    expenses: selectExpenses
})

const mapDispatchToProps = dispatch => ({
    getExpenses: () => dispatch(getExpenses()),
})

AdjustStock.propTypes = {
    expenseItems: PropTypes.array,
    getExpenses: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustStock)