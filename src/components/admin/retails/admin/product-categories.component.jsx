import { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

import { getCategories, deleteCategory } from '../../../../redux/retail/retail.action'
import { selectCategoryItems } from '../../../../redux/retail/retail.selector'

import AddCategory from '../../modal/addCategory.component'
import EditCategory from '../../modal/editCategory.component'

const ProductCategories = ({ getCategories, categories, deleteCategory }) => {
    const [category, setCategory] = useState('');

    useEffect(() => {
        getCategories()
    }, [getCategories]);

    const onDelete = () => {}

    const onRefresh = () => getCategories()

    return (
        <Fragment>
            <div className="container-fluid">
            <div className="card">
                <div className="card-body pb-3">
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title mb-0 font-size-22">Categories</h6>
                        <div className="text-right">
                            <button className="btn btn-sm btn-primary ml-1" data-toggle="modal" data-target="#addcategoryModal">
                                <i className="fa fa-plus mr-2"></i> Add
                            </button>
                            <button className="btn btn-sm btn-light ml-1" onClick={onRefresh}>
                                <i className="fa fa-refresh mr-2"></i> Refresh
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {categories.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-left">Code</th>
                                        <th>Description</th>
                                        <th>Department</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {categories.map(category => (
                                    <tbody key={category.id}>
                                        <tr className="cursor-pointer">
                                            <td>{category.code}</td>
                                            <td>{category.description}</td>
                                            <td>{category.department}</td>
                                            <td className="text-right">

                                                <button className="btn btn-sm btn-default ml-1" onClick={() => setCategory(category)} data-toggle="modal" data-target="#editcategoryModal">
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                                <button className="btn btn-sm btn-default ml-1" onClick={() => onDelete(
                                                        swal({
                                                            title: "Delete Category",
                                                            text: `Are you sure you want to delete ${category.description}`,
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        }).then((confirm) => {
                                                            if (confirm) {
                                                                deleteCategory(category.id)
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
            <AddCategory />
            <EditCategory category={category} />

        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    categories: selectCategoryItems,
})

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategories()),
    deleteCategory: (id) => dispatch(deleteCategory(id))
})

ProductCategories.propTypes = {
    getCategories: PropTypes.func,
    categories: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);