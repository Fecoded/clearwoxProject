import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types'

import { getDepartments, createCategory } from '../../../redux/retail/retail.action';
import { selectDepartmentItems, selectLoading } from '../../../redux/retail/retail.selector';
import Alert from '../../../redux/retail/retail.utils';


const AddCategory = ({ departments, getDepartments, createCategory, loading }) => {
    const [departmentId, setDepartmentId] = useState('')
    const [description, setDescription] = useState('')
    const [margin, setMargin] = useState('')


    useEffect(() => {
        getDepartments();
        if(!loading){
            setDepartmentId('')
            setDescription('')
            setMargin('')
        }
    }, [getDepartments, loading])

    const hideModal = () => {}

    const onSubmit = (e) => {
        e.preventDefault();
        if (departmentId !== '') {
            createCategory({
                departmentId: +departmentId,
                description,
                margin: +margin,
                hideModal
            })
         
        } else {
            if(departmentId === ''){
                Alert('Please select a department from the list') 
            }

    }}

    return (
        <div className="modal fade" id="addcategoryModal" role="dialog" aria-hidden="true">
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
                                    value={departmentId}
                                    onChange={(e) => setDepartmentId(e.target.value)}
                                >
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
    createCategory: (formData) => dispatch(createCategory(formData))
});

AddCategory.propTypes = {
    departments: PropTypes.array,
    response: PropTypes.number,
    getDepartments: PropTypes.func,
    createCategory: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);