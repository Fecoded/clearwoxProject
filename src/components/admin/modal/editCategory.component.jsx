import { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types'

import { getDepartments, updateCategory } from '../../../redux/retail/retail.action';
import { selectDepartmentItems, selectLoading } from '../../../redux/retail/retail.selector';


const EditCategory = ({ departments, category, getDepartments, updateCategory, loading }) => {
    const [departmentId, setDepartment] = useState("");
    const [description, setDescription] = useState("");
    const [margin, setMargin] = useState("");

    useEffect(() => {
        if (category) {
            setDescription(category.description);
            setMargin(category.margin);
            setDepartment(category.departmentId)
        }

        getDepartments();
    }, [getDepartments, category])

    const onSubmit = (e) => {
        e.preventDefault();
        updateCategory({
            id: category.id,
            departmentId: +departmentId,
            description,
            margin: +margin,
            hideModal
        })
    }

    const hideModal = () => { }

    return (
        <div className="modal fade" id="editcategoryModal" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form className="modal-content" onSubmit={onSubmit}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Category Dialog</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name='description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-row">
                                
                            <div className="form-group col">
                                <label htmlFor="category">Department</label>
                                <select
                                    className="form-control"
                                    name='departmentId'
                                    value={departmentId || ''}
                                    onChange={(e) => setDepartment(e.target.value)}>
                                    <option>Select</option>
                                    {departments.map(department => (
                                        <option key={department.id} value={department.id}>{department.description}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group col">
                                <label htmlFor="description">Margin</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Margin"
                                    name='margin'
                                    value={margin}
                                    onChange={(e) => setMargin(e.target.value)}
                                    required
                                />
                            </div>

                        </div>

                    </div>
                    <div className="modal-footer">
                        {loading ? (
                            <button type="button" className="btn btn-primary" disabled>
                                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                                    Loading...
                        </button>
                        ) : (
                            <Fragment>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Fragment>
                            )}
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    departments: selectDepartmentItems,
    loading: selectLoading
});

const mapDispatchToProps = dispatch => ({
    getDepartments: () => dispatch(getDepartments()),
    updateCategory: (formData) => dispatch(updateCategory(formData))
});

EditCategory.propTypes = {
    departments: PropTypes.array,
    getDepartments: PropTypes.func,
    updateCategory: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);