import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'


import AddExpense from '../../modal/operations/addExpense.component';
import EditExpense from '../../modal/operations/editExpense.component';

import { getExpensesItem, deleteExpense } from '../../../../redux/retail/retail.action'
import { selectExpenseItems } from '../../../../redux/retail/retail.selector'

const AdjustStock = ({ getExpensesItem, deleteExpense, expenseItems }) => {
    const [expenseItem, setExpenseItem] = useState('')

    useEffect(() => {
        getExpensesItem()
    }, [getExpensesItem])

    const onDelete = () => {};

    const onRefresh = () => getExpensesItem();

return(
    <Fragment>
        <div className="container-fluid">
      <div className="card">
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h6 className="card-title font-size-22">Expenses</h6>

                    <div className="text-right">
                        <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addexpenseModal">
                             <i className="fa fa-plus mr-2"></i> Add
                        </button>
                        <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                            <i className="fa fa-refresh mr-2"></i> Refresh
                        </button>
                    </div>
            </div>
        </div>

            <div className="card-body">
            {expenseItems.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    {expenseItems.map(expenseItem => (
                                        <tbody key={expenseItem.id}>
                                            <tr className="cursor-pointer">
                                        <td>{expenseItem.description}</td>
                                        <td className="text-right">
                                                <button className="btn btn-sm btn-default ml-1" data-toggle="modal" data-target="#editexpenseModal" onClick={() => setExpenseItem(expenseItem)}>
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                          
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Stock",
                                                            text: `Are you sure you want to delete ${expenseItem.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                                deleteExpense(expenseItem.id)
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
                        No Expenses Available
                    </div>
            )}
            </div>
            </div>

    </div>
    <AddExpense />  
    <EditExpense expenseItem={expenseItem} />
    </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    expenseItems: selectExpenseItems
})

const mapDispatchToProps = dispatch => ({
    getExpensesItem: () => dispatch(getExpensesItem()),
    deleteExpense: (id) => dispatch(deleteExpense(id))
})

AdjustStock.propTypes = {
    expenseItems: PropTypes.array,
    getExpensesItem: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdjustStock)